import { useEffect } from "react";

export default function Root(props) {
  useEffect(() => {
    console.log("onNavClick foi disparado")
    const handleClick = () => {
      console.log("onNavClick foi disparadoooooo")
    }
    window.addEventListener("onNavClick", handleClick)
    return () => {
      window.removeEventListener("onNavClick", handleClick)
    }
  }, [])

  return <section>{props.name} is mounted!</section>;
}
