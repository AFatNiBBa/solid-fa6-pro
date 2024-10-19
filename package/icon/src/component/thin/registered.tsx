
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `registered` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=thin registered}
 * @preview ![registered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWk0zNjAgMjA4QzM2MCAxNjMuODkxIDMyNC4xMjUgMTI4IDI4MCAxMjhIMTg0QzE3MC43ODEgMTI4IDE2MCAxMzguNzY2IDE2MCAxNTJWMzc2QzE2MCAzODAuNDA2IDE2My41OTQgMzg0IDE2OCAzODRTMTc2IDM4MC40MDYgMTc2IDM3NlYyODhIMjgwQzI4MS4xOTMgMjg4IDI4Mi4zMDUgMjg3LjcwMSAyODMuNDg0IDI4Ny42NDhMMzQ1LjM0NCAzODAuNDM4QzM0Ni45NTUgMzgyLjg3MSAzNTEuNjU0IDM4NS44MDkgMzU2LjQzOCAzODIuNjU2QzM2MC4xMjUgMzgwLjIxOSAzNjEuMDk0IDM3NS4yNSAzNTguNjU2IDM3MS41NjJMMzAwLjg3MyAyODQuODg5QzMzNC44MzQgMjc1LjY0MSAzNjAgMjQ0Ljg0NCAzNjAgMjA4Wk0yODAgMjcySDE3NlYxNTJDMTc2IDE0Ny41OTQgMTc5LjU5NCAxNDQgMTg0IDE0NEgyODBDMzE1LjI4MSAxNDQgMzQ0IDE3Mi43MDMgMzQ0IDIwOFMzMTUuMjgxIDI3MiAyODAgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Registered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM360 208C360 163.891 324.125 128 280 128H184C170.781 128 160 138.766 160 152V376C160 380.406 163.594 384 168 384S176 380.406 176 376V288H280C281.193 288 282.305 287.701 283.484 287.648L345.344 380.438C346.955 382.871 351.654 385.809 356.438 382.656C360.125 380.219 361.094 375.25 358.656 371.562L300.873 284.889C334.834 275.641 360 244.844 360 208ZM280 272H176V152C176 147.594 179.594 144 184 144H280C315.281 144 344 172.703 344 208S315.281 272 280 272Z" />
        </Icon>
    </>
}