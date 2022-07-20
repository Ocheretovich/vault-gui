import { CardHeaderStack, Text } from "components";
import tw from "twin.macro";

type Props = {
  children: React.ReactNode;
};

const CardHeaderVaultNoModules = ({ children }: Props) => (
  <>
    <CardHeaderStack tw="gap-1 justify-center">
      {/* title2  color="label" */}
      <Text variant="title1" tw="text-center" weight="medium">
        Store your Data
      </Text>
      <Text variant="body" color="labelTertiary" tw="text-center">
        To get started, choose an app
      </Text>
    </CardHeaderStack>

    {/* CTA */}
    <div tw="flex flex-col lg:flex-row justify-center gap-4 pt-7">
      {children}
    </div>
  </>
);

export { CardHeaderVaultNoModules };
