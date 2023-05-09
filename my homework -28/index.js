function checkLink(link) {
    if (!/^https?:\/\//i.test(link)) {
        link = "http://" + link;
    }
    return link;
}
function redirectToLink(link) {
    link = checkLink(link);
    window.location.href = link;
}
