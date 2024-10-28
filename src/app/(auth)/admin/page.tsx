import { ButtonSubmit } from "@/utils/components/forms/ButtonSubmit";
import { LabelInput } from "@/utils/components/forms/LabelInput";
import Image from "next/image";
import Link from "next/link";
import Dumbbells from "@/utils/assets/dumbbells.jpg";

export default function SigninPage() {
  return (
    <>
      <div className="grid grid-cols-2 justify-items-center h-dvh">
        <form className="flex flex-col justify-center w-1/2">
          <div>
            <LabelInput name="E-mail" type="email" />
          </div>
          <div className="mt-6">
            <LabelInput name="Senha" type="password" />
          </div>
          <Link className="text-primary" href="#">
            Esqueceu a senha?
          </Link>

          <div className="mt-6">
            <ButtonSubmit name="ENTRAR" />
          </div>
        </form>

        <div
          className="max-h-screen p-10 w-full
          after:bg-secondary after:absolute after:top-0 after:right-0
            after:w-1/2 after:h-full after:opacity-10 after:z-0"
        >
          <Image
            src={Dumbbells}
            className="max-h-full min-h-full w-full rounded-xl
              bg-cover object-cover opacity-100 z-10"
            alt="Dumbbels"
            loading="lazy"
            width={500}
            height={1024}
          />
        </div>
      </div>
    </>
  );
}
