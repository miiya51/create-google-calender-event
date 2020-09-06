const SEARCH_TERM = 'subject:Amazon.co.jp 発送されました';

function create_event_amazon() {

  const threads = GmailApp.search(SEARCH_TERM, 0, 1);
  const messages = GmailApp.getMessagesForThreads(threads);

  for (const thread of messages) {
    for (const message of thread) {
      console.log(message.getSubject());
      var year = message.getDate();
      console.log(year)
    }
  }
}