// IndustryConnect: checks a student placement application before coordinator review
const REQUIRED_DOCUMENTS = ["resume", "transcript", "placement-agreement"];

function getMissingDocuments(uploadedDocuments) {
  if (!Array.isArray(uploadedDocuments)) {
    return [...REQUIRED_DOCUMENTS];
  }
  const uploaded = uploadedDocuments.map((doc) => String(doc).trim().toLowerCase());
  return REQUIRED_DOCUMENTS.filter((doc) => !uploaded.includes(doc));
}

function isReadyForReview(application) {
  if (!application || application.status !== "submitted") {
    return false;
  }
  return getMissingDocuments(application.documents).length === 0;
}

module.exports = { REQUIRED_DOCUMENTS, getMissingDocuments, isReadyForReview };
