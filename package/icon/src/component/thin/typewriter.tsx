
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `typewriter` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/typewriter?s=thin typewriter}
 * @preview ![typewriter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik03MiAxNjBDNzYuNDA2IDE2MCA4MCAxNTYuNDIyIDgwIDE1MlY0MEM4MCAyNi43NjYgOTAuNzgxIDE2IDEwNCAxNkgzNjIuNzVDMzY5LjA2MiAxNiAzNzUuMjUgMTguNTYyIDM3OS43MTkgMjMuMDMxTDQyNC45NjkgNjguMjgxQzQyOS40MzggNzIuNzUgNDMyIDc4LjkzOCA0MzIgODUuMjVWMTUyQzQzMiAxNTYuNDIyIDQzNS41OTQgMTYwIDQ0MCAxNjBTNDQ4IDE1Ni40MjIgNDQ4IDE1MlY4NS4yNUM0NDggNzQuNTYyIDQ0My44NDQgNjQuNTMxIDQzNi4yODEgNTYuOTY5TDM5MS4wMzEgMTEuNzE5QzM4My41OTQgNC4yNjYgMzczLjI4MSAwIDM2Mi43NSAwSDEwNEM4MS45MzggMCA2NCAxNy45MzggNjQgNDBWMTUyQzY0IDE1Ni40MjIgNjcuNTk0IDE2MCA3MiAxNjBaTTQ4MCAxOTJIMzY3LjEwOUMzNTcuMTc0IDE5MiAzNDcuMzczIDE5NC4zMTIgMzM4LjQ4NiAxOTguNzU2TDMwMS41MTQgMjE3LjI0MkMyOTIuNjI3IDIyMS42ODYgMjgyLjgyOCAyMjQgMjcyLjg5MyAyMjRIMjM5LjEwOUMyMjkuMTc0IDIyNCAyMTkuMzczIDIyMS42ODYgMjEwLjQ4NiAyMTcuMjQyTDE3My41MTQgMTk4Ljc1NkMxNjQuNjI3IDE5NC4zMTIgMTU0LjgyOCAxOTIgMTQ0Ljg5MyAxOTJIMzJDMTQuMzI4IDE5MiAwIDIwNi4zMjYgMCAyMjRWMjU2QzAgMjczLjY3MiAxNC4zMjggMjg4IDMyIDI4OFY0NTZDMzIgNDg2Ljg3NSA1Ny4xMjUgNTEyIDg4IDUxMkg0MjRDNDU0Ljg3NSA1MTIgNDgwIDQ4Ni44NzUgNDgwIDQ1NlYyODhDNDk3LjY3NCAyODggNTEyIDI3My42NzIgNTEyIDI1NlYyMjRDNTEyIDIwNi4zMjYgNDk3LjY3NCAxOTIgNDgwIDE5MlpNNDY0IDQ1NkM0NjQgNDc4LjA2MiA0NDYuMDYyIDQ5NiA0MjQgNDk2SDg4QzY1LjkzOCA0OTYgNDggNDc4LjA2MiA0OCA0NTZWMjg4SDQ2NFY0NTZaTTQ5NiAyNTZDNDk2IDI2NC44MjIgNDg4LjgyMiAyNzIgNDgwIDI3MkgzMkMyMy4xNzggMjcyIDE2IDI2NC44MjIgMTYgMjU2VjIyNEMxNiAyMTUuMTc4IDIzLjE3OCAyMDggMzIgMjA4SDE0NC44OTNDMTUyLjMwNSAyMDggMTU5LjcyOSAyMDkuNzUyIDE2Ni4zNTkgMjEzLjA2NkwyMDMuMzMyIDIzMS41NTVDMjE0LjM4MyAyMzcuMDc4IDIyNi43NTQgMjQwIDIzOS4xMDkgMjQwSDI3Mi44OTNDMjg1LjI0NiAyNDAgMjk3LjYxNyAyMzcuMDc4IDMwOC42NyAyMzEuNTUzTDM0NS42NDMgMjEzLjA2NkMzNTIuMjczIDIwOS43NTIgMzU5LjY5NSAyMDggMzY3LjEwOSAyMDhINDgwQzQ4OC44MjIgMjA4IDQ5NiAyMTUuMTc4IDQ5NiAyMjRWMjU2Wk0zNTIgNDQ4SDE2MEMxNTUuNTc4IDQ0OCAxNTIgNDUxLjU5NCAxNTIgNDU2UzE1NS41NzggNDY0IDE2MCA0NjRIMzUyQzM1Ni40MjIgNDY0IDM2MCA0NjAuNDA2IDM2MCA0NTZTMzU2LjQyMiA0NDggMzUyIDQ0OFpNMTYwIDQxNkMxNjguODM2IDQxNiAxNzYgNDA4LjgzNiAxNzYgNDAwQzE3NiAzOTEuMTYyIDE2OC44MzYgMzg0IDE2MCAzODRTMTQ0IDM5MS4xNjIgMTQ0IDQwMEMxNDQgNDA4LjgzNiAxNTEuMTY0IDQxNiAxNjAgNDE2Wk0yMjQgNDE2QzIzMi44MzYgNDE2IDI0MCA0MDguODM2IDI0MCA0MDBDMjQwIDM5MS4xNjIgMjMyLjgzNiAzODQgMjI0IDM4NFMyMDggMzkxLjE2MiAyMDggNDAwQzIwOCA0MDguODM2IDIxNS4xNjQgNDE2IDIyNCA0MTZaTTI4OCA0MTZDMjk2LjgzNiA0MTYgMzA0IDQwOC44MzYgMzA0IDQwMEMzMDQgMzkxLjE2MiAyOTYuODM2IDM4NCAyODggMzg0UzI3MiAzOTEuMTYyIDI3MiA0MDBDMjcyIDQwOC44MzYgMjc5LjE2NCA0MTYgMjg4IDQxNlpNMzUyIDQxNkMzNjAuODM2IDQxNiAzNjggNDA4LjgzNiAzNjggNDAwQzM2OCAzOTEuMTYyIDM2MC44MzYgMzg0IDM1MiAzODRTMzM2IDM5MS4xNjIgMzM2IDQwMEMzMzYgNDA4LjgzNiAzNDMuMTY0IDQxNiAzNTIgNDE2Wk0xMjggMzUyQzEzNi44MzYgMzUyIDE0NCAzNDQuODM2IDE0NCAzMzZDMTQ0IDMyNy4xNjIgMTM2LjgzNiAzMjAgMTI4IDMyMFMxMTIgMzI3LjE2MiAxMTIgMzM2QzExMiAzNDQuODM2IDExOS4xNjQgMzUyIDEyOCAzNTJaTTE5MiAzNTJDMjAwLjgzNiAzNTIgMjA4IDM0NC44MzYgMjA4IDMzNkMyMDggMzI3LjE2MiAyMDAuODM2IDMyMCAxOTIgMzIwUzE3NiAzMjcuMTYyIDE3NiAzMzZDMTc2IDM0NC44MzYgMTgzLjE2NCAzNTIgMTkyIDM1MlpNMjU2IDM1MkMyNjQuODM2IDM1MiAyNzIgMzQ0LjgzNiAyNzIgMzM2QzI3MiAzMjcuMTYyIDI2NC44MzYgMzIwIDI1NiAzMjBTMjQwIDMyNy4xNjIgMjQwIDMzNkMyNDAgMzQ0LjgzNiAyNDcuMTY0IDM1MiAyNTYgMzUyWk0zMjAgMzUyQzMyOC44MzYgMzUyIDMzNiAzNDQuODM2IDMzNiAzMzZDMzM2IDMyNy4xNjIgMzI4LjgzNiAzMjAgMzIwIDMyMFMzMDQgMzI3LjE2MiAzMDQgMzM2QzMwNCAzNDQuODM2IDMxMS4xNjQgMzUyIDMyMCAzNTJaTTM4NCAzNTJDMzkyLjgzNiAzNTIgNDAwIDM0NC44MzYgNDAwIDMzNkM0MDAgMzI3LjE2MiAzOTIuODM2IDMyMCAzODQgMzIwUzM2OCAzMjcuMTYyIDM2OCAzMzZDMzY4IDM0NC44MzYgMzc1LjE2NCAzNTIgMzg0IDM1MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Typewriter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M72 160C76.406 160 80 156.422 80 152V40C80 26.766 90.781 16 104 16H362.75C369.062 16 375.25 18.562 379.719 23.031L424.969 68.281C429.438 72.75 432 78.938 432 85.25V152C432 156.422 435.594 160 440 160S448 156.422 448 152V85.25C448 74.562 443.844 64.531 436.281 56.969L391.031 11.719C383.594 4.266 373.281 0 362.75 0H104C81.938 0 64 17.938 64 40V152C64 156.422 67.594 160 72 160ZM480 192H367.109C357.174 192 347.373 194.312 338.486 198.756L301.514 217.242C292.627 221.686 282.828 224 272.893 224H239.109C229.174 224 219.373 221.686 210.486 217.242L173.514 198.756C164.627 194.312 154.828 192 144.893 192H32C14.328 192 0 206.326 0 224V256C0 273.672 14.328 288 32 288V456C32 486.875 57.125 512 88 512H424C454.875 512 480 486.875 480 456V288C497.674 288 512 273.672 512 256V224C512 206.326 497.674 192 480 192ZM464 456C464 478.062 446.062 496 424 496H88C65.938 496 48 478.062 48 456V288H464V456ZM496 256C496 264.822 488.822 272 480 272H32C23.178 272 16 264.822 16 256V224C16 215.178 23.178 208 32 208H144.893C152.305 208 159.729 209.752 166.359 213.066L203.332 231.555C214.383 237.078 226.754 240 239.109 240H272.893C285.246 240 297.617 237.078 308.67 231.553L345.643 213.066C352.273 209.752 359.695 208 367.109 208H480C488.822 208 496 215.178 496 224V256ZM352 448H160C155.578 448 152 451.594 152 456S155.578 464 160 464H352C356.422 464 360 460.406 360 456S356.422 448 352 448ZM160 416C168.836 416 176 408.836 176 400C176 391.162 168.836 384 160 384S144 391.162 144 400C144 408.836 151.164 416 160 416ZM224 416C232.836 416 240 408.836 240 400C240 391.162 232.836 384 224 384S208 391.162 208 400C208 408.836 215.164 416 224 416ZM288 416C296.836 416 304 408.836 304 400C304 391.162 296.836 384 288 384S272 391.162 272 400C272 408.836 279.164 416 288 416ZM352 416C360.836 416 368 408.836 368 400C368 391.162 360.836 384 352 384S336 391.162 336 400C336 408.836 343.164 416 352 416ZM128 352C136.836 352 144 344.836 144 336C144 327.162 136.836 320 128 320S112 327.162 112 336C112 344.836 119.164 352 128 352ZM192 352C200.836 352 208 344.836 208 336C208 327.162 200.836 320 192 320S176 327.162 176 336C176 344.836 183.164 352 192 352ZM256 352C264.836 352 272 344.836 272 336C272 327.162 264.836 320 256 320S240 327.162 240 336C240 344.836 247.164 352 256 352ZM320 352C328.836 352 336 344.836 336 336C336 327.162 328.836 320 320 320S304 327.162 304 336C304 344.836 311.164 352 320 352ZM384 352C392.836 352 400 344.836 400 336C400 327.162 392.836 320 384 320S368 327.162 368 336C368 344.836 375.164 352 384 352Z" />
        </Icon>
    </>
}