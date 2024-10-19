
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `handshake-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-slash?s=light handshake-slash}
 * @preview ![handshake-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTguMjk3IDk3Ljg5MUMyNjcuMDQ3IDk2LjYyNSAyNzMuMTA5IDg4LjUgMjcxLjgyOCA3OS43NjZDMjcwLjU2MiA3MS4wMTYgMjYyLjQ4NCA2NC44NDQgMjUzLjcwMyA2Ni4yMzRDMjM1Ljg4MSA2OC44MiAyMTguNjc2IDc0LjM0NCAyMDIuMDMxIDgxLjMwM0wyMzEuMTIzIDEwNC4yNzFDMjQwLjAzMyAxMDEuNTI1IDI0OS4wOCA5OS4yMyAyNTguMjk3IDk3Ljg5MVpNMzUwLjA3OCAxNDkuNzgxQzMzOS4yNjQgMTU5LjgyOCAzMzAuMDU3IDE2OC4zODMgMzIxLjkyNCAxNzUuOTU3TDM0Ny4zMyAxOTYuMDE2QzM2MC44NDQgMTgzLjQ1MyAzNzEuODU5IDE3My4yMTkgMzcxLjg1OSAxNzMuMjE5QzM3OC4zMjggMTY3LjIwMyAzNzguNzAzIDE1Ny4wNzggMzcyLjY4NyAxNTAuNjA5QzM2Ni42NTYgMTQ0LjEyNSAzNTYuNTQ3IDE0My43OTcgMzUwLjA3OCAxNDkuNzgxWk0yODYuMzk2IDE0Ny45MDhMMzM3LjY3MiA5OS45MjJDMzQwLjQ4NCA5Ny4zNTkgMzQzLjg3NSA5NiAzNDcuNDM4IDk2SDM1NS42MDlDNDA0LjczNCA5NiA0NTQuMDc4IDExNy41NzggNDkwLjk4NCAxNTUuMjAzTDQ5NS42ODggMTYwSDUyOFYzMzguNjU0TDU2MCAzNjMuOTE4VjE2MEg2MjRDNjMyLjg0NCAxNjAgNjQwIDE1Mi44NDQgNjQwIDE0NFM2MzIuODQ0IDEyOCA2MjQgMTI4SDUwOC45ODRDNDY2LjY1NiA4Ny4yNSA0MTEuMTI1IDY0IDM1NS42MDkgNjRIMzQ3LjQzN0MzMzUuOTIyIDY0IDMyNC43OTcgNjguMzU5IDMxNS45NjkgNzYuNDIyTDI2MC45ODIgMTI3Ljg0NEwyODYuMzk2IDE0Ny45MDhaTTM4MS4wMTYgNDI0LjgxMkMzNzQuMjE5IDQzMy4wOTQgMzYxLjk2OSA0MzQuNDA2IDM1NC4xMjUgNDI4TDMzNy4xNTYgNDEzLjI1TDMyNC41MzEgNDA0LjkzOEwzMTMuOTg0IDQxNS40NjlDMzA2LjQ1MyA0MjQuNzUgMjk1Ljc2NiA0MzAuNTMxIDI4My44OTEgNDMxLjc1QzI3MS45MDYgNDMyLjkzOCAyNjAuMzEzIDQyOS40NjkgMjUwLjY4OCA0MjEuNjg4TDE2MC4zOTEgMzUySDExMlYxNzMuMzI4TDU0LjU4OCAxMjhIMTZDNy4xNTYgMTI4IDAgMTM1LjE1NiAwIDE0NFM3LjE1NiAxNjAgMTYgMTYwSDgwVjM2OEM4MCAzNzYuODEyIDcyLjgyOCAzODQgNjQgMzg0SDMyQzIzLjE1NiAzODQgMTYgMzkxLjE1NiAxNiA0MDBTMjMuMTU2IDQxNiAzMiA0MTZINjRDODQuODMyIDQxNiAxMDIuNDI2IDQwMi41ODQgMTA5LjA1MyAzODRIMTQ5LjQ4NEwyMzAuODEyIDQ0Ni43NUMyNDQuNjU2IDQ1OCAyNjEuNTYyIDQ2NCAyNzkuMTQxIDQ2NEMyODEuODEyIDQ2NCAyODQuNDg0IDQ2My44NzUgMjg3LjE3MiA0NjMuNTk0QzMwMi4yODEgNDYyLjAzMSAzMTYuMjY2IDQ1Ni4xNTYgMzI3LjQwNiA0NDcuMTU2TDMzMy41IDQ1Mi40MzhDMzU1LjM0NCA0NzAuMjgxIDM4Ny43ODEgNDY3IDQwNS44MTIgNDQ1LjAzMUw0MjUuNDcxIDQyMC44MTNMNDAwLjM2MyA0MDAuOTlMMzgxLjAxNiA0MjQuODEyWk02MjQgMzg0SDU4NS40MzhMNjI1LjU2OCA0MTUuNjg0QzYzMy42MzcgNDE0Ljg1OSA2NDAgNDA4LjI4NyA2NDAgNDAwQzY0MCAzOTEuMTU2IDYzMi44NDQgMzg0IDYyNCAzODRaTTI1LjkyMiAzLjQyQzE4Ljk4NCAtMi4wMzMgOC45MjIgLTAuODMgMy40MzggNi4wNjFDLTIuMDMxIDEyLjk5OCAtMC44NDQgMjMuMDYxIDYuMDc4IDI4LjU0NUw2MTQuMDc4IDUwOC41NjJDNjE3LjAxNiA1MTAuODc1IDYyMC41MTYgNTEyIDYyMy45ODQgNTEyQzYyOC43MTkgNTEyIDYzMy40MDYgNTA5LjkwNiA2MzYuNTYyIDUwNS45MjJDNjQyLjAzMSA0OTguOTg0IDY0MC44NDQgNDg4LjkyIDYzMy45MjIgNDgzLjQzNkwyNS45MjIgMy40MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandshakeSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M258.297 97.891C267.047 96.625 273.109 88.5 271.828 79.766C270.562 71.016 262.484 64.844 253.703 66.234C235.881 68.82 218.676 74.344 202.031 81.303L231.123 104.271C240.033 101.525 249.08 99.23 258.297 97.891ZM350.078 149.781C339.264 159.828 330.057 168.383 321.924 175.957L347.33 196.016C360.844 183.453 371.859 173.219 371.859 173.219C378.328 167.203 378.703 157.078 372.687 150.609C366.656 144.125 356.547 143.797 350.078 149.781ZM286.396 147.908L337.672 99.922C340.484 97.359 343.875 96 347.438 96H355.609C404.734 96 454.078 117.578 490.984 155.203L495.688 160H528V338.654L560 363.918V160H624C632.844 160 640 152.844 640 144S632.844 128 624 128H508.984C466.656 87.25 411.125 64 355.609 64H347.437C335.922 64 324.797 68.359 315.969 76.422L260.982 127.844L286.396 147.908ZM381.016 424.812C374.219 433.094 361.969 434.406 354.125 428L337.156 413.25L324.531 404.938L313.984 415.469C306.453 424.75 295.766 430.531 283.891 431.75C271.906 432.938 260.313 429.469 250.688 421.688L160.391 352H112V173.328L54.588 128H16C7.156 128 0 135.156 0 144S7.156 160 16 160H80V368C80 376.812 72.828 384 64 384H32C23.156 384 16 391.156 16 400S23.156 416 32 416H64C84.832 416 102.426 402.584 109.053 384H149.484L230.812 446.75C244.656 458 261.562 464 279.141 464C281.812 464 284.484 463.875 287.172 463.594C302.281 462.031 316.266 456.156 327.406 447.156L333.5 452.438C355.344 470.281 387.781 467 405.812 445.031L425.471 420.813L400.363 400.99L381.016 424.812ZM624 384H585.438L625.568 415.684C633.637 414.859 640 408.287 640 400C640 391.156 632.844 384 624 384ZM25.922 3.42C18.984 -2.033 8.922 -0.83 3.438 6.061C-2.031 12.998 -0.844 23.061 6.078 28.545L614.078 508.562C617.016 510.875 620.516 512 623.984 512C628.719 512 633.406 509.906 636.562 505.922C642.031 498.984 640.844 488.92 633.922 483.436L25.922 3.42Z" />
        </Icon>
    </>
}