"use client";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import Link from "next/link";
import { Film, Global, HomeTicket } from "./components/Icon";
import Typography from "./components/Typography";
import Datepicker from "./components/DatePicker";
import Select from "./components/Select";
import { useState } from "react";
import HomePageSearch from "./components/HomePageSearch";

export default function Home() {
  const [value, setValue] = useState(undefined);
  return (
    <main className="min-h-screen">
      <section className="mt-28 grid grid-cols-12">
        <div className="col-span-8 flex flex-col">
          <Typography component="h1" className="pt-12 text-header font-bold">
            Book tickets
          </Typography>
          <Typography component="label" className="mt-1 text-header font-bold">
            anywhere, all in{" "}
            <span className="text-accent-color">one place</span>
          </Typography>

          <Typography
            component="p"
            className="mb-2 mt-24 text-normal text-text-secondary-color"
          >
            What, when, where?
          </Typography>

          <HomePageSearch />

          <Button
            color="bookadot-primary"
            className="mt-8 w-[300px] hover:opacity-80"
          >
            Launch App --&gt;
          </Button>
        </div>
        <div className="col-span-4">
          <HomeTicket />
        </div>
      </section>
    </main>
  );
}
