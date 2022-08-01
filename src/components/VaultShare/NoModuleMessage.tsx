// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Button, Link } from "src/components";
import { CarbonArrowRight } from "src/components/Icons";
import { FocusStack } from "src/components/VaultShare";
import config from "src/config";

interface Props {
  handleClick: () => void;
}

const NoModuleMessage = ({ handleClick }: Props) => (
  <FocusStack tw="rounded-lg overflow-hidden gap-0 border bg-gray-40 border-separator items-center">
    <Link
      underline={false}
      href={config.vanaVaultURL}
      target="_blank"
      rel="noopener noreferrer"
      tw="p-8"
    >
      <Button
        variant="solid"
        size="xl"
        suffix={<CarbonArrowRight />}
        tw="min-w-[220px]"
        onClick={handleClick}
      >
        Add data
      </Button>
    </Link>
  </FocusStack>
);

export { NoModuleMessage };