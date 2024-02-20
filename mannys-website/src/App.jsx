import "./App.css";
import Header from "./components/Header";
import MenuItem from "./components/MenuItem";
import lasagna from "./assets/menu/lasagna.jpg";

function App() {
  return (
    <div className="h-[1000px]">
      <Header />
      <div className="flex justify-center items-center mt-[200px]">
        <MenuItem
          itemTitle="Homemade Lasagna"
          backgroundImage={lasagna}
          description="your choice of veggi or meat lasagna, towering layers of noodles, a ruch homemade meat/or marinara sauce, mozzarella, and parmesan cheese"
          price="13.99"
        />
      </div>
    </div>
  );
}

export default App;
