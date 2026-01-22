export default function Root(props) {
  function onClick(){
    const event = new CustomEvent('onNavClick');
    window.dispatchEvent(event);
  }

  return (
    <section>
      {props.name} is mounted!
      <button onClick={onClick}>Login</button>
    </section>
  );
}
