/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

export const onInitialClientRender = () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
};
