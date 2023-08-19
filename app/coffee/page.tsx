import { title } from "@/components/primitives";
import { CoffeeMenu } from "@/components/menu/coffee";

export default function CoffeePage() {
  return (
    <div>
      <h1 className={title()}>Coffee</h1>
      <p>
        <CoffeeMenu />
      </p>
    </div>
  );
}
