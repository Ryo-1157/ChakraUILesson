import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <IconButton
      onClick={onOpen}
      aria-label="メニューボタン"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
    />
  );
});
