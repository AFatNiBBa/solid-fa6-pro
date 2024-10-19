
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `text-width` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text-width?s=thin text-width}
 * @preview ![text-width](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAgMzJIOEMzLjU3OCAzMiAwIDM1LjU3OCAwIDQwVjEyMEMwIDEyNC40MjIgMy41NzggMTI4IDggMTI4UzE2IDEyNC40MjIgMTYgMTIwVjQ4SDIxNlYyNzJIMTY4QzE2My41NzggMjcyIDE2MCAyNzUuNTc4IDE2MCAyODBTMTYzLjU3OCAyODggMTY4IDI4OEgyODBDMjg0LjQyMiAyODggMjg4IDI4NC40MjIgMjg4IDI4MFMyODQuNDIyIDI3MiAyODAgMjcySDIzMlY0OEg0MzJWMTIwQzQzMiAxMjQuNDIyIDQzNS41NzggMTI4IDQ0MCAxMjhTNDQ4IDEyNC40MjIgNDQ4IDEyMFY0MEM0NDggMzUuNTc4IDQ0NC40MjIgMzIgNDQwIDMyWk0zNTcuNjU2IDI5MC4zNDRDMzU0LjUzMSAyODcuMjE5IDM0OS40NjkgMjg3LjIxOSAzNDYuMzQ0IDI5MC4zNDRTMzQzLjIxOSAyOTguNTMxIDM0Ni4zNDQgMzAxLjY1Nkw0MjAuNjg4IDM3NkgyNy4zMTJMMTAxLjY1NiAzMDEuNjU2QzEwMy4yMTkgMzAwLjA5NCAxMDQgMjk4LjA0NyAxMDQgMjk2UzEwMy4yMTkgMjkxLjkwNiAxMDEuNjU2IDI5MC4zNDRDOTguNTMxIDI4Ny4yMTkgOTMuNDY5IDI4Ny4yMTkgOTAuMzQ0IDI5MC4zNDRMMi4zNDQgMzc4LjM0NEMtMC43ODEgMzgxLjQ2OSAtMC43ODEgMzg2LjUzMSAyLjM0NCAzODkuNjU2TDkwLjM0NCA0NzcuNjU2QzkzLjQ2OSA0ODAuNzgxIDk4LjUzMSA0ODAuNzgxIDEwMS42NTYgNDc3LjY1NlMxMDQuNzgxIDQ2OS40NjkgMTAxLjY1NiA0NjYuMzQ0TDI3LjMxMiAzOTJINDIwLjY4OEwzNDYuMzQ0IDQ2Ni4zNDRDMzQ0Ljc4MSA0NjcuOTA2IDM0NCA0NjkuOTUzIDM0NCA0NzJTMzQ0Ljc4MSA0NzYuMDk0IDM0Ni4zNDQgNDc3LjY1NkMzNDkuNDY5IDQ4MC43ODEgMzU0LjUzMSA0ODAuNzgxIDM1Ny42NTYgNDc3LjY1Nkw0NDUuNjU2IDM4OS42NTZDNDQ4Ljc4MSAzODYuNTMxIDQ0OC43ODEgMzgxLjQ2OSA0NDUuNjU2IDM3OC4zNDRMMzU3LjY1NiAyOTAuMzQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TextWidth(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M440 32H8C3.578 32 0 35.578 0 40V120C0 124.422 3.578 128 8 128S16 124.422 16 120V48H216V272H168C163.578 272 160 275.578 160 280S163.578 288 168 288H280C284.422 288 288 284.422 288 280S284.422 272 280 272H232V48H432V120C432 124.422 435.578 128 440 128S448 124.422 448 120V40C448 35.578 444.422 32 440 32ZM357.656 290.344C354.531 287.219 349.469 287.219 346.344 290.344S343.219 298.531 346.344 301.656L420.688 376H27.312L101.656 301.656C103.219 300.094 104 298.047 104 296S103.219 291.906 101.656 290.344C98.531 287.219 93.469 287.219 90.344 290.344L2.344 378.344C-0.781 381.469 -0.781 386.531 2.344 389.656L90.344 477.656C93.469 480.781 98.531 480.781 101.656 477.656S104.781 469.469 101.656 466.344L27.312 392H420.688L346.344 466.344C344.781 467.906 344 469.953 344 472S344.781 476.094 346.344 477.656C349.469 480.781 354.531 480.781 357.656 477.656L445.656 389.656C448.781 386.531 448.781 381.469 445.656 378.344L357.656 290.344Z" />
        </Icon>
    </>
}