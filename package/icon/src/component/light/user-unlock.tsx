
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-unlock` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=light user-unlock}
 * @preview ![user-unlock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMjg4SDQ0OFYyMDhDNDQ4IDE4MS41MzEgNDY5LjUzMSAxNjAgNDk2IDE2MFM1NDQgMTgxLjUzMSA1NDQgMjA4QzU0NCAyMTYuODQ0IDU1MS4xNTYgMjI0IDU2MCAyMjRTNTc2IDIxNi44NDQgNTc2IDIwOEM1NzYgMTYzLjg5MSA1NDAuMTI1IDEyOCA0OTYgMTI4UzQxNiAxNjMuODkxIDQxNiAyMDhWMjg4QzM4MC42NTQgMjg4IDM1MiAzMTYuNjUyIDM1MiAzNTJWNDQ4QzM1MiA0ODMuMzQ2IDM4MC42NTQgNTEyIDQxNiA1MTJINTc2QzYxMS4zNDYgNTEyIDY0MCA0ODMuMzQ2IDY0MCA0NDhWMzUyQzY0MCAzMTYuNjUyIDYxMS4zNDYgMjg4IDU3NiAyODhaTTYwOCA0NDhDNjA4IDQ2NS42NDUgNTkzLjY0NSA0ODAgNTc2IDQ4MEg0MTZDMzk4LjM1NiA0ODAgMzg0IDQ2NS42NDUgMzg0IDQ0OFYzNTJDMzg0IDMzNC4zNTUgMzk4LjM1NiAzMjAgNDE2IDMyMEg1NzZDNTkzLjY0NSAzMjAgNjA4IDMzNC4zNTUgNjA4IDM1MlY0NDhaTTQ5NiAzNzZDNDgyLjc0NiAzNzYgNDcyIDM4Ni43NDQgNDcyIDQwMEM0NzIgNDEzLjI1NCA0ODIuNzQ2IDQyNCA0OTYgNDI0UzUyMCA0MTMuMjU0IDUyMCA0MDBDNTIwIDM4Ni43NDQgNTA5LjI1NCAzNzYgNDk2IDM3NlpNMTczLjMzNiAzMzZIMjc0LjY2NEMyODQuMTggMzM2IDI5My40MjYgMzM3LjA2MiAzMDIuMzY5IDMzOC45NzFDMzEyLjYzOSAzNDEuMTYyIDMyMi4yNzQgMzMyLjc2NCAzMjEuMzY3IDMyMi4zMDNDMzIxLjM1OCAzMjIuMTg2IDMyMS4zNDggMzIyLjA2NiAzMjEuMzM2IDMyMS45NDdDMzIwLjcxOSAzMTQuNzA1IDMxNS40NTUgMzA4Ljg2NSAzMDguMzMgMzA3LjQyNEMyOTcuNDQyIDMwNS4yMjEgMjg2LjIwMyAzMDQgMjc0LjY2NCAzMDRIMTczLjMzNkM3Ny41MzkgMzA0IC0wLjExNSAzODEuNzE1IDAgNDc3LjU0M0MwLjAyNCA0OTYuNTc0IDE1LjYzMyA1MTIgMzQuNjY0IDUxMkgzMDRDMzEyLjgzNiA1MTIgMzIwIDUwNC44MzYgMzIwIDQ5NkMzMjAgNDg3LjE2MiAzMTIuODM2IDQ4MCAzMDQgNDgwSDM0LjY2NEMzMy4yMTMgNDgwIDMyIDQ3OC43OTMgMzIgNDc3LjM0MkMzMS45OTQgMzk5LjQwNCA5NS4zOTkgMzM2IDE3My4zMzYgMzM2Wk0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTMgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTMgMjU2IDIyNCAyNTZaTTIyNCAzMkMyNzYuOTM2IDMyIDMyMCA3NS4wNjQgMzIwIDEyOEMzMjAgMTgwLjkzNCAyNzYuOTM2IDIyNCAyMjQgMjI0UzEyOCAxODAuOTM0IDEyOCAxMjhDMTI4IDc1LjA2NCAxNzEuMDY1IDMyIDIyNCAzMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserUnlock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 288H448V208C448 181.531 469.531 160 496 160S544 181.531 544 208C544 216.844 551.156 224 560 224S576 216.844 576 208C576 163.891 540.125 128 496 128S416 163.891 416 208V288C380.654 288 352 316.652 352 352V448C352 483.346 380.654 512 416 512H576C611.346 512 640 483.346 640 448V352C640 316.652 611.346 288 576 288ZM608 448C608 465.645 593.645 480 576 480H416C398.356 480 384 465.645 384 448V352C384 334.355 398.356 320 416 320H576C593.645 320 608 334.355 608 352V448ZM496 376C482.746 376 472 386.744 472 400C472 413.254 482.746 424 496 424S520 413.254 520 400C520 386.744 509.254 376 496 376ZM173.336 336H274.664C284.18 336 293.426 337.062 302.369 338.971C312.639 341.162 322.274 332.764 321.367 322.303C321.358 322.186 321.348 322.066 321.336 321.947C320.719 314.705 315.455 308.865 308.33 307.424C297.442 305.221 286.203 304 274.664 304H173.336C77.539 304 -0.115 381.715 0 477.543C0.024 496.574 15.633 512 34.664 512H304C312.836 512 320 504.836 320 496C320 487.162 312.836 480 304 480H34.664C33.213 480 32 478.793 32 477.342C31.994 399.404 95.399 336 173.336 336ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.313 0 96 57.309 96 128S153.313 256 224 256ZM224 32C276.936 32 320 75.064 320 128C320 180.934 276.936 224 224 224S128 180.934 128 128C128 75.064 171.065 32 224 32Z" />
        </Icon>
    </>
}