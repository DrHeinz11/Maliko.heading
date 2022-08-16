import { Link } from "@chakra-ui/react";
const NavItems = ({ linkItems: { url, title } }) => {
  return (
    <Link target="_blank" rel="noopener" href={url}>
      {title}
    </Link>
  );
};

export default NavItems;
