import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";

import { Group, Link, Stack, styledMotionDiv, Text } from "src/components";
import { SharingUpdateStatus } from "src/components/VaultShare";
import config from "src/config";
import { SharePipelineProgress, ShareStatus } from "src/types/";

import { FocusStack } from "./Subelement";

/* 
  SharingStatus presents UI messages for the sharing status. For the Pending status, we also show the sub-statuses for sharing data progress. 
 */

interface Props {
  shareStatus: ShareStatus;
  shareProgress: SharePipelineProgress;
}

const SharingStatus = ({
  shareStatus: status,
  shareProgress: stage,
}: Props) => {
  console.log("Status", status, "Progress", stage);

  return (
    <FocusStack isCentered tw="relative">
      {/* IDLE OR PENDING */}
      {(status === ShareStatus.IDLE || status === ShareStatus.PENDING) && (
        <AnimatePresence>
          <motion.div
            initial={{ x: 540 }}
            exit={{ x: -540 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
            css={styledMotionDiv}
          >
            <Stack tw="h-full items-center justify-center">
              <Stack tw="items-center -mt-3">
                <SharingUpdateStatus stage={stage} status={status} />
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      )}

      {/* REJECTED */}
      {status === ShareStatus.REJECTED && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 20 }}
            exit={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25 }}
            css={styledMotionDiv}
          >
            <Stack tw="h-full items-center justify-center">
              <Stack tw="gap-1.5 items-center text-error -mt-3">
                <Group tw="gap-1.5 text-error items-center">
                  <Icon
                    icon="carbon:error"
                    height="1.1em"
                    tw="-mt-[0.1em] lg:mt-0"
                  />
                  <Text
                    variant="body"
                    color="error"
                    weight="bold"
                    tw="text-center"
                  >
                    Something went wrong
                  </Text>
                </Group>
                <Text as="span" variant="base" weight="normal" tw="text-center">
                  Close this window and try again. You can also{" "}
                  <Link href={`mailto:${config.vanaSupportEmail}`}>
                    email us
                  </Link>
                  .
                </Text>
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      )}

      {/* RESOLVED */}
      {status === ShareStatus.RESOLVED && (
        <AnimatePresence>
          <motion.div
            initial={{ y: 20 }}
            exit={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25 }}
            css={styledMotionDiv}
          >
            <Stack tw="h-full items-center justify-center">
              <Stack tw="gap-1.5 items-center text-primary -mt-3">
                <div tw="text-3xl">
                  <Icon icon="carbon:checkmark-outline" />
                </div>
                <Text variant="body" weight="medium" tw="text-center">
                  Done
                </Text>
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      )}
    </FocusStack>
  );
};

export { SharingStatus };
