const DEFAULT_FOLDER_ID = "1FN7U_GkWpo9rrtkt0SRSLyKGtEiti95e";
const DEFAULT_NOTIFY_EMAIL = "cassar.roderick@gmail.com";

function doPost(e) {
  try {
    const input = JSON.parse(e.postData.contents || "{}");
    const properties = PropertiesService.getScriptProperties();
    const expectedSecret = properties.getProperty("SHARED_SECRET");
    if (!expectedSecret || input.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: "Unauthorized" });
    }

    const quote = input.quote || {};
    if (!quote.id || !quote.name || !quote.email || !quote.message) {
      return jsonResponse({ ok: false, error: "Missing quote data" });
    }

    const folderId = properties.getProperty("FOLDER_ID") || DEFAULT_FOLDER_ID;
    const notifyEmail = properties.getProperty("NOTIFY_EMAIL") || DEFAULT_NOTIFY_EMAIL;
    const root = DriveApp.getFolderById(folderId);
    const safeName = String(quote.name).replace(/[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ _.-]/g, "").slice(0, 60) || "klient";
    const stamp = Utilities.formatDate(new Date(), "Europe/Warsaw", "yyyy-MM-dd_HH-mm-ss");
    const quoteFolder = root.createFolder(stamp + "_" + safeName + "_" + quote.id.slice(0, 8));

    let uploadedFile = null;
    if (input.file && input.file.base64 && input.file.name) {
      const bytes = Utilities.base64Decode(input.file.base64);
      const blob = Utilities.newBlob(bytes, input.file.type || "application/octet-stream", input.file.name);
      uploadedFile = quoteFolder.createFile(blob);
    }

    const details = [
      "DrukForma 3D — zapytanie o wycenę", "", "ID: " + quote.id,
      "Data: " + quote.submittedAt, "Klient: " + quote.name, "E-mail: " + quote.email,
      "Rodzaj projektu: " + (quote.projectType || "—"), "Materiał: " + (quote.material || "—"),
      "Link: " + (quote.projectUrl || "—"), "Plik: " + (uploadedFile ? uploadedFile.getName() : "—"),
      "", "Opis:", quote.message,
    ].join("\n");
    quoteFolder.createFile("zapytanie.txt", details, MimeType.PLAIN_TEXT);

    MailApp.sendEmail(
      notifyEmail,
      "Nowa wycena DrukForma 3D — " + quote.name,
      details + "\n\nFolder w Google Drive: " + quoteFolder.getUrl(),
      { replyTo: quote.email, name: "DrukForma 3D — formularz wyceny" }
    );
    return jsonResponse({ ok: true, folderUrl: quoteFolder.getUrl() });
  } catch (error) {
    console.error(error);
    return jsonResponse({ ok: false, error: "Submission processing failed" });
  }
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
