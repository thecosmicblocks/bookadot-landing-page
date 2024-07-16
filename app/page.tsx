"use client";
import { Button, Checkbox, Label, TextInput, ToggleSwitch } from "flowbite-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Button color="bookadot-primary">Find out -&gt;</Button>
        <Link color="bookadot-primary" href="#">Term of use</Link>

        {/* https://flowbite-react.com/docs/components/forms#select-input */}
        <form className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
                </div>
                <TextInput color="bookadot" sizing="bookadot" id="email1" type="email" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput color="bookadot" sizing="bookadot" id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
                <Checkbox color="bookadot" id="remember" />
                <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button color="bookadot-primary" type="submit">Submit</Button>
        </form>


        <ToggleSwitch onChange={() => {}} checked={true} label="Toggle me" color="bookadot" />

    </main>
  );
}
