import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import ResponsiveAppBar from './Navbar';
import Quote from './Quote';
import { Container } from '@mui/system';
import { ViewColumn } from '@mui/icons-material';
const name = 'Devashish';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children}) {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Quote></Quote>
      <main>{children}</main>
    </>
  );
}