import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex gap-3">
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "sm",
            variant: "bordered",
          })}
        >
          Coffee
        </Link>
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "sm" })}
          href={siteConfig.links.github}
        >
          Snacks
        </Link>
      </div>
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Brewing&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>coffee soon</h1>
        <h2 className={subtitle({ class: "mt-4" })}>Digital Menu</h2>
      </div>

      {/* <div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div> */}
    </section>
  );
}
