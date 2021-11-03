
const QuoteGenerator = () => {
  const quotes = [
    `"Always know more than you tell."\n― Neil Gaiman `, 
    `"The first draft is just you telling yourself the story."\n― Terry Pratchett`,
    `“You can always edit a bad page. You can’t edit a blank page.”\n― Jodi Picoult`,
    `"A professional writer is an amateur who didn’t quit.”\n― Richard Bach`,
    `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."\n― Toni Morrison`,
    `"I write to discover what I know."\n― Flannery O'Connor`,
    `"Your intuition knows what to write, so get out of the way."\n― Ray Bradbury.`,
    `"Writing is an exploration. You start from nothing and learn as you go."\n― E. L. Doctorow.`,
    `“If you wait for inspiration to write you’re not a writer, you’re a waiter.”\n― Dan Poynter`,
    `“First, find out what your hero wants, then just follow him.”\n― Ray Bradbury`,
    `“A blank piece of paper is God's way of telling us how hard it is to be God.”\n― Sidney Sheldon`,
    `“A writer is a world trapped in a person.”\n― Victor Hugo`
  ]

  let random = Math.ceil(Math.random() * quotes.length-1);

  return (
    <span className="quoteComponent">
      {quotes[random]}
    </span>
  )
}

export default QuoteGenerator