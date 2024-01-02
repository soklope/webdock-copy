export const checkAdmin = (userEmail) => {
  // if (userEmail.endsWith("@webdock.io" || "@edu.ucl.dk")) {
  if (userEmail !== null && userEmail.endsWith("@edu.ucl.dk") || userEmail.endsWith("@webdock.io")) {
    return true;
  } else {
    return false;
  }
}
