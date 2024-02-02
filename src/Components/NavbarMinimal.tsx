import React,{ useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconCategory,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { SiAboutdotme } from "react-icons/si";
import { BsPerson } from "react-icons/bs";
import { GiDiploma } from "react-icons/gi";
// import { Category2 } from 'tabler-icons-react';
import { MantineLogo } from '@mantine/ds';
const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : "",
    },
  },

  active: {
    '&, &:hover': {
   
      color: theme.fn.variant({ variant: 'light', color: 'orange' }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: BsPerson, label: 'Welcome' },
  { icon: SiAboutdotme, label: 'About Me' },
  { icon: GiDiploma, label: 'Education' },
  { icon: IconCategory, label: 'Projects' },
  
  // { icon: IconUser, label: 'Account' },
  // { icon: IconFingerprint, label: 'Security' },
  // { icon: IconSettings, label: 'Settings' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Navbar height={'100%'} width={{ base: 50}} p="md" className='fixed bg-black border-1 border-gray-900 '>
      {/* <Center>
        <MantineLogo type="mark" size={30} />
      </Center> */}
      <Navbar.Section grow mt={50} className=''>
  <Stack justify="center" spacing={0}  align="center" className='gap-4 absolute inset-y-0 left-0 '>
    {links}
  </Stack>
</Navbar.Section>

      <Navbar.Section>
      
      </Navbar.Section>
    </Navbar>
  );
}