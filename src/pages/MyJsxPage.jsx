import MyHeadline from "../components/MyHeadline.jsx"

function MyJsxPage() {
  // These are not typical React variables because tehy are constant and not reactive (cannot change)
  const text = 'Hey, the headline should read "My JSX Page"!'
  const headline = "My JSX Page"

  const add = (a, b) => a + b
  //This method/function returns JSX elemnt
  const showAdd = (a, b) => <p>The result of {a} + {b} is {add(a, b)}</p>

  return <article>
    <MyHeadline headline={headline} />
    <p>{text}</p>
    <p>The result of 4 + 4 is {add(4, 4)}</p>
    <p>{ showAdd(6, 3)}</p>
  </article>

}

export default MyJsxPage
