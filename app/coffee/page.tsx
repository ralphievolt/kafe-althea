import { title } from "@/components/primitives";
import { CoffeeMenu } from "@/components/menu/coffee";

export default function CoffeePage() {
  return (
    <div>
      <div className="ml-5">
        <h1 className={title()}>Coffee</h1>
      </div>

      <p>
        <CoffeeMenu />
      </p>
    </div>
  );
}
