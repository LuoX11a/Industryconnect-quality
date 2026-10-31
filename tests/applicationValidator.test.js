const { getMissingDocuments, isReadyForReview } = require("../src/applicationValidator");

const ALL_DOCUMENTS = ["resume", "transcript", "police-check", "placement-agreement"];

describe("getMissingDocuments", () => {
  test("returns no missing documents when all are uploaded", () => {
    expect(getMissingDocuments(ALL_DOCUMENTS)).toEqual([]);
  });

  test("lists the documents that are missing", () => {
    expect(getMissingDocuments(["resume", "transcript"])).toEqual([
      "police-check",
      "placement-agreement"
    ]);
  });

  test("ignores letter case and extra spaces", () => {
    expect(
      getMissingDocuments([" Resume ", "TRANSCRIPT", "Police-Check", "placement-agreement"])
    ).toEqual([]);
  });

  test("treats invalid input as nothing uploaded", () => {
    expect(getMissingDocuments(null)).toHaveLength(4);
  });
});

describe("isReadyForReview", () => {
  test("accepts a submitted application with all documents", () => {
    expect(isReadyForReview({ status: "submitted", documents: ALL_DOCUMENTS })).toBe(true);
  });

  test("rejects a submitted application missing the police check", () => {
    const documents = ["resume", "transcript", "placement-agreement"];
    expect(isReadyForReview({ status: "submitted", documents })).toBe(false);
  });

  test("rejects a draft application even with all documents", () => {
    expect(isReadyForReview({ status: "draft", documents: ALL_DOCUMENTS })).toBe(false);
  });

  test("rejects an empty application", () => {
    expect(isReadyForReview(undefined)).toBe(false);
  });
});
