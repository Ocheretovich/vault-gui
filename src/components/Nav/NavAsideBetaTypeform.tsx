import { Icon } from "@iconify/react";
import { PopupButton } from "@typeform/embed-react";
import Image from "next/image";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import {
  Flex,
  Stack,
  styledNavLinkHover,
  Text,
  WithIcon,
} from "src/components";

const NavAsideBetaTypeform = () => (
  <PopupButton
    id="oFOUdaW6"
    tw="w-full block"
    size={75}
    medium="demo-test"
    hidden={{ foo: "foo value", bar: "bar value" }}
  >
    <Flex css={styledNavLinkHover} tw="items-center justify-end relative">
      <Image
        src="/images/vana-keys-beta.png"
        layout="intrinsic"
        width="100"
        height="100"
        alt="Vana is in Beta. We'd love your feedback."
        priority
      />
      <Flex tw="absolute top-0 h-full items-center left-inset">
        <Stack tw="gap-1 flex-1 items-start">
          <Text variant="headingMeta" weight="bold">
            Beta
          </Text>
          <Text variant="note" weight="medium" tw="flex items-center gap-0.5">
            <WithIcon
              suffix={<Icon icon="carbon:arrow-up-right" rotate="0deg" />}
            >
              Give feedback
            </WithIcon>
          </Text>
        </Stack>
      </Flex>
    </Flex>
  </PopupButton>
);

export { NavAsideBetaTypeform };