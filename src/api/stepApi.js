// function called to return the steps from the api endpoint.
// getMostRecentContent and sortSteps are called on the data before returning the steps to create the expected format and order for UI.
export const getSteps = () => {
  const baseUrl =
    'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';

  const steps = fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      return sortSteps(getMostRecentContent(data));
    });
  return steps;
};

// Get the most recent content for each step in the steps array
const getMostRecentContent = (data) => {
  let mostRecentContentArr = [];
  data.forEach((step) => {
    let mostRecentContent;
    step.versionContent.forEach((content) => {
      if (mostRecentContent === undefined) {
        mostRecentContent = {title: content.title, body: content.body};
      } else if (
        Date.parse(mostRecentContent.effectiveDate) < Date.parse(content.effectiveDate)
      ) {
        mostRecentContent = {title: content.title, body: content.body};
      }
    });
    mostRecentContentArr.push({id: step.id, stepNumber: step.stepNumber, ...mostRecentContent})
  });
  return mostRecentContentArr;
};

// sort steps by stepNumber
const sortSteps = (data) => {
  return data.sort((a, b) => (+a.stepNumber > +b.stepNumber) ? 1 : -1)
};
