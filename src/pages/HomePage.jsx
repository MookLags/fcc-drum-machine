import Key from '../components/Key';

const HomePage = () => {
  const saySomething = () => {
    console.log("hi");
  }
  return (
    <div>
      <Key letter="S" />
    </div>
  )
}

export default HomePage;
