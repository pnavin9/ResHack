import PDFServicesSdk from '@adobe/pdfservices-node-sdk';
import fs from 'fs';

// Load credentials from external file
const credentialsFile = './pdfservices-api-credentials.json';
const credentialsData = JSON.parse(fs.readFileSync(credentialsFile));
const clientId = credentialsData.client_credentials.client_id;
const clientSecret = credentialsData.client_credentials.client_secret;

const generatePDFs = (JSON_INPUT, INPUT) => {
  return new Promise((resolve, reject) => {
    console.log(JSON_INPUT);
    const OUTPUT = './generatedResume.pdf';

    // If our output already exists, remove it so we can run the application again.
    if (fs.existsSync(OUTPUT)) fs.unlinkSync(OUTPUT);

    //const INPUT = `./ResumeTemplates/${JSON_INPUT.template_id}/BasicTemplate.docx`;

    // Set up our credentials object.
    const credentials = PDFServicesSdk.Credentials.servicePrincipalCredentialsBuilder()
      .withClientId(clientId)
      .withClientSecret(clientSecret)
      .build();

    // Create an ExecutionContext using credentials
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);

    // This creates an instance of the Export operation we're using, as well as specifying output type (DOCX)
    const documentMerge = PDFServicesSdk.DocumentMerge;
    const documentMergeOptions = documentMerge.options;
    const options = new documentMergeOptions.DocumentMergeOptions(
      JSON_INPUT,
      documentMergeOptions.OutputFormat.PDF
    );

    // Create a new operation instance using the options instance.
    const documentMergeOperation = documentMerge.Operation.createNew(options);

    // Set operation input document template from a source file.
    const input = PDFServicesSdk.FileRef.createFromLocalFile(INPUT);
    documentMergeOperation.setInput(input);

    // Execute the operation and Save the result to the specified location.
    documentMergeOperation
      .execute(executionContext)
      .then((result) => result.saveAsFile(OUTPUT))
      .then(() => resolve())
      .catch((err) => {
        if (
          err instanceof PDFServicesSdk.Error.ServiceApiError ||
          err instanceof PDFServicesSdk.Error.ServiceUsageError
        ) {
          console.log('Exception encountered while executing operation', err);
          reject(err);
        } else {
          console.log('Exception encountered while executing operation', err);
          reject(err);
        }
      });
  });
};

export default generatePDFs;
