
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `prescription-bottle` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=light prescription-bottle}
 * @preview ![prescription-bottle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgMTYwQzMyNy4xNjQgMTYwIDMyMCAxNjcuMTYyIDMyMCAxNzZWNDQ4QzMyMCA0NjUuNjcyIDMwNS42NzQgNDgwIDI4OCA0ODBIOTZDNzguMzI2IDQ4MCA2NCA0NjUuNjcyIDY0IDQ0OFY0MTZIMTQ0QzE1Mi44MDEgNDE2IDE2MCA0MDguNzk5IDE2MCA0MDBDMTYwIDM5MS4xOTkgMTUyLjgwMSAzODQgMTQ0IDM4NEg2NFYzMjBIMTQ0QzE1Mi44MDEgMzIwIDE2MCAzMTIuNzk5IDE2MCAzMDRDMTYwIDI5NS4xOTkgMTUyLjgwMSAyODggMTQ0IDI4OEg2NFYyMjRIMTQ0QzE1Mi44MDEgMjI0IDE2MCAyMTYuNzk5IDE2MCAyMDhDMTYwIDE5OS4xOTkgMTUyLjgwMSAxOTIgMTQ0IDE5Mkg2NFYxNzZDNjQgMTY3LjE2MiA1Ni44MzYgMTYwIDQ4IDE2MFMzMiAxNjcuMTYyIDMyIDE3NlY0NDhDMzIgNDgzLjE5OSA2MC44MDEgNTEyIDk2IDUxMkgyODhDMzIzLjE5OSA1MTIgMzUyIDQ4My4xOTkgMzUyIDQ0OFYxNzZDMzUyIDE2Ny4xNjIgMzQ0LjgzNiAxNjAgMzM2IDE2MFpNMzUyIDBIMzJDMTQuMzI2IDAgMCAxNC4zMjYgMCAzMlY5NkMwIDExMy42NzIgMTQuMzI2IDEyOCAzMiAxMjhIMzUyQzM2OS42NzQgMTI4IDM4NCAxMTMuNjcyIDM4NCA5NlYzMkMzODQgMTQuMzI2IDM2OS42NzQgMCAzNTIgMFpNMzUyIDk2SDMyVjMySDM1MlY5NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PrescriptionBottle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M336 160C327.164 160 320 167.162 320 176V448C320 465.672 305.674 480 288 480H96C78.326 480 64 465.672 64 448V416H144C152.801 416 160 408.799 160 400C160 391.199 152.801 384 144 384H64V320H144C152.801 320 160 312.799 160 304C160 295.199 152.801 288 144 288H64V224H144C152.801 224 160 216.799 160 208C160 199.199 152.801 192 144 192H64V176C64 167.162 56.836 160 48 160S32 167.162 32 176V448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V176C352 167.162 344.836 160 336 160ZM352 0H32C14.326 0 0 14.326 0 32V96C0 113.672 14.326 128 32 128H352C369.674 128 384 113.672 384 96V32C384 14.326 369.674 0 352 0ZM352 96H32V32H352V96Z" />
        </Icon>
    </>
}