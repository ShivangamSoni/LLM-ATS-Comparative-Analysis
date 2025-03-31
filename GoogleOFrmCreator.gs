// App Script for Creating Google form using the Summary Sample JSONs

function loadJSONFromDrive(fileName) {
    const folderName = "MTechThesis";

    // Get the Folder
    const folders = DriveApp.getFoldersByName(folderName);
    if (!folders.hasNext()) {
        throw new Error("Folder not found: " + folderName);
    }
    const folder = folders.next();

    // Get the file
    const files = folder.getFilesByName(fileName);
    if (!files.hasNext()) {
        throw new Error("File not found: " + fileName);
    }
    const file = files.next();

    // Read and parse the JSON
    const content = file.getBlob().getDataAsString();
    return JSON.parse(content);
}

function createFormFromJSON() {
    const modelName = "GPT2";
    const jsonData = loadJSONFromDrive(`${modelName}-samples.json`);

    // Create a new form
    const form = FormApp.create(`LLM Summary Human Evaluation - ${modelName}`);
    form.setDescription(
        "Please evaluate each Article and its Summary on the following Criterias\n\t𝗙𝗹𝘂𝗲𝗻𝗰𝘆: Is the summary grammatically correct and readable?\n\n\t𝗥𝗲𝗹𝗲𝘃𝗮𝗻𝗰𝗲: Does the summary capture the most important points?\n\n\t𝗖𝗼𝗵𝗲𝗿𝗲𝗻𝗰𝗲: Is the summary logically structured and easy to follow?\n\n\t𝗙𝗮𝗰𝘁𝘂𝗮𝗹 𝗔𝗰𝗰𝘂𝗿𝗮𝗰𝘆: Does the summary contain accurate information from the source text?"
    );

    // Add a section for each document in the JSON
    jsonData.forEach((item, index) => {
        // Create a new page for each document
        form.addPageBreakItem()
            .setTitle(`Article ${index + 1}`)
            .setHelpText(`Dataset: ${item.dataset}`);

        // Add document text as plain text
        const docText = form
            .addSectionHeaderItem()
            .setTitle("𝗔𝗿𝘁𝗶𝗰𝗹𝗲 𝗧𝗲𝘅𝘁:")
            .setHelpText(item.article);

        // Add summary text as plain text
        const summaryText = form
            .addSectionHeaderItem()
            .setTitle("𝗟𝗟𝗠 𝗦𝘂𝗺𝗺𝗮𝗿𝘆:")
            .setHelpText(item.generated_summary);

        // Add rating grid for all criteria
        const grid = form.addGridItem();
        grid.setTitle("Please rate the Summary on the following Criterias")
            .setHelpText(
                "𝗙𝗹𝘂𝗲𝗻𝗰𝘆: Is the summary grammatically correct and readable?\n\n𝗥𝗲𝗹𝗲𝘃𝗮𝗻𝗰𝗲: Does the summary capture the most important points?\n\n𝗖𝗼𝗵𝗲𝗿𝗲𝗻𝗰𝗲: Is the summary logically structured and easy to follow?\n\n𝗙𝗮𝗰𝘁𝘂𝗮𝗹 𝗔𝗰𝗰𝘂𝗿𝗮𝗰𝘆: Does the summary contain accurate information from the source text?"
            )
            .setRequired(true);

        // Set up the grid with criteria as rows and scale as columns
        grid.setRows(["𝗙𝗹𝘂𝗲𝗻𝗰𝘆", "𝗥𝗲𝗹𝗲𝘃𝗮𝗻𝗰𝗲", "𝗖𝗼𝗵𝗲𝗿𝗲𝗻𝗰𝗲", "𝗙𝗮𝗰𝘁𝘂𝗮𝗹 𝗔𝗰𝗰𝘂𝗿𝗮𝗰𝘆"]);
        grid.setColumns(["1", "2", "3", "4", "5"]);
    });

    // Log the URL of the published form
    Logger.log("Form URL: " + form.getPublishedUrl());
}
