
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `handshake-simple` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-simple?s=light handshake-simple}
 * @preview ![handshake-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMzcuNTk0IDE2MEwxNDQuNjA5IDE1OS44NDRMMTQ5LjM0NCAxNTQuODc1QzE3OC42NTYgMTI0LjA3OCAyMTcuMzU5IDEwMy44NDQgMjU4LjI5NyA5Ny44OTFDMjY3LjA0NyA5Ni42MjUgMjczLjEwOSA4OC41IDI3MS44MjggNzkuNzY2QzI3MC41NjIgNzEuMDE2IDI2Mi40ODQgNjQuODQ0IDI1My43MDMgNjYuMjM0QzIwNy44MjggNzIuODkxIDE2NC40MjIgOTQuNzk3IDEzMC44NzUgMTI4SDE2QzcuMTU2IDEyOCAwIDEzNS4xNTYgMCAxNDRTNy4xNTYgMTYwIDE2IDE2MEgxMzcuNTk0Wk0yMjEuMTI1IDE2NS4yMTlDMjAwLjUxNiAxODYuMDc4IDE5OS42ODggMjE4LjkyMiAyMTkuMzkxIDI0MC42MDlDMjI2LjYyNSAyNDguNjU2IDI0MC40NjkgMjU3LjU2MiAyNTcuNjA5IDI1OC40MjJDMjU4LjQ4NCAyNTguNDUzIDI1OS4zNDQgMjU4LjQ4NCAyNjAuMjAzIDI1OC40ODRDMjczLjE0MSAyNTguNDg0IDI4NS4yNSAyNTMuNjQxIDI5NS4zOTEgMjQ0LjQwNkwzMDAuNjA5IDIzOS42NDFWMjM5LjVDMzE3LjQyMiAyMjMuNzk3IDM3MS44NTkgMTczLjIxOSAzNzEuODU5IDE3My4yMTlDMzc4LjMyOCAxNjcuMjAzIDM3OC43MDMgMTU3LjA3OCAzNzIuNjg4IDE1MC42MDlDMzY2LjY1NiAxNDQuMTI1IDM1Ni41NDcgMTQzLjc5NyAzNTAuMDc4IDE0OS43ODFDMzAyLjQ4NCAxOTQgMjgyLjY4OCAyMTIuMzkxIDI3NC40NjkgMjIxLjQ1M0wyNzMuODI4IDIyMC43NUMyNjkuMzEyIDIyNC44NDQgMjY0LjMyOCAyMjYuNTQ3IDI1OS4yMDMgMjI2LjQ1M0MyNTEuODkxIDIyNi4wOTQgMjQ1LjYyNSAyMjEuOTM4IDI0My4xNDEgMjE5LjE1NkMyMzUuNzk3IDIxMS4wNzggMjM0LjI2NiAxOTYuOTM4IDI0NC4zOTEgMTg3LjIxOUwzMzcuNjcyIDk5LjkyMkMzNDAuNDg0IDk3LjM1OSAzNDMuODc1IDk2IDM0Ny40MzggOTZIMzU1LjYwOUM0MDQuNzM0IDk2IDQ1NC4wNzggMTE3LjU3OCA0OTAuOTg0IDE1NS4yMDNMNDk1LjY4OCAxNjBINjI0QzYzMi44NDQgMTYwIDY0MCAxNTIuODQ0IDY0MCAxNDRTNjMyLjg0NCAxMjggNjI0IDEyOEg1MDguOTg0QzQ2Ni42NTYgODcuMjUgNDExLjEyNSA2NCAzNTUuNjA5IDY0SDM0Ny40MzdDMzM1LjkyMiA2NCAzMjQuNzk3IDY4LjM1OSAzMTUuOTY5IDc2LjQyMkwyMjEuNSAxNjQuNzY2TDIyMS4xMjUgMTY1LjIxOVpNNjI0IDM1Mkg0OTkuMzAxQzQ5Ni41MzUgMzQ0LjM4NSA0OTIuNTA2IDMzNy4xODkgNDg1Ljc4MSAzMzEuNzE5TDM3Ny4yNjYgMjQzLjU3OEMzNzAuMzc1IDIzOCAzNjAuMjk3IDIzOS4wNjIgMzU0Ljc1IDI0NS45MDZDMzQ5LjE4NyAyNTIuNzY2IDM1MC4yMTkgMjYyLjg0NCAzNTcuMDc4IDI2OC40MjJMNDY1LjU5NCAzNTYuNTMxQzQ3MS43MTkgMzYxLjUzMSA0NzIuNjU2IDM3MC41OTQgNDY3LjcwMyAzNzYuNzE5TDQ1OC42MDkgMzg3Ljk2OUM0NTMuNjcyIDM5NC4xMjUgNDQ0LjUzMSAzOTUgNDM4LjU3OCAzOTAuMjgxTDQyMS4wMTYgMzc1LjU2M0wzODEuMDE2IDQyNC44MTNDMzc0LjIxOSA0MzMuMDk0IDM2MS45NjkgNDM0LjQwNiAzNTQuMTI1IDQyOEwzMzcuMTU2IDQxMy4yNUwzMjQuNTMxIDQwNC45MzhMMzEzLjk4NCA0MTUuNDY5QzMwNi40NTMgNDI0Ljc1IDI5NS43NjYgNDMwLjUzMSAyODMuODkxIDQzMS43NUMyNzEuOTA2IDQzMi45MzggMjYwLjMxMyA0MjkuNDY5IDI1MC42ODggNDIxLjY4OEwxNjAuMzkxIDM1MkgzMkMyMy4xNTYgMzUyIDE2IDM1OS4xNTYgMTYgMzY4UzIzLjE1NiAzODQgMzIgMzg0SDE0OS40ODRMMjMwLjgxMiA0NDYuNzVDMjQ0LjY1NiA0NTggMjYxLjU2MiA0NjQgMjc5LjE0MSA0NjRDMjgxLjgxMiA0NjQgMjg0LjQ4NCA0NjMuODc1IDI4Ny4xNzIgNDYzLjU5NEMzMDIuMjgxIDQ2Mi4wMzEgMzE2LjI2NiA0NTYuMTU2IDMyNy40MDYgNDQ3LjE1NkwzMzMuNSA0NTIuNDM4QzM1NS4zNDQgNDcwLjI4MSAzODcuNzgxIDQ2NyA0MDUuODEyIDQ0NS4wMzFMNDI2LjA3OCA0MjAuMDYzQzQ0NS4yOTcgNDI5Ljk2OSA0NjkuNDg0IDQyNS40MzggNDgzLjQ4NCA0MDguMDk0TDQ5Mi41NzggMzk2Ljg0NEM0OTUuNzM4IDM5Mi45MzIgNDk3LjU3MiAzODguNDY3IDQ5OS4yNjggMzg0SDYyNEM2MzIuODQ0IDM4NCA2NDAgMzc2Ljg0NCA2NDAgMzY4UzYzMi44NDQgMzUyIDYyNCAzNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandshakeSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M137.594 160L144.609 159.844L149.344 154.875C178.656 124.078 217.359 103.844 258.297 97.891C267.047 96.625 273.109 88.5 271.828 79.766C270.562 71.016 262.484 64.844 253.703 66.234C207.828 72.891 164.422 94.797 130.875 128H16C7.156 128 0 135.156 0 144S7.156 160 16 160H137.594ZM221.125 165.219C200.516 186.078 199.688 218.922 219.391 240.609C226.625 248.656 240.469 257.562 257.609 258.422C258.484 258.453 259.344 258.484 260.203 258.484C273.141 258.484 285.25 253.641 295.391 244.406L300.609 239.641V239.5C317.422 223.797 371.859 173.219 371.859 173.219C378.328 167.203 378.703 157.078 372.688 150.609C366.656 144.125 356.547 143.797 350.078 149.781C302.484 194 282.688 212.391 274.469 221.453L273.828 220.75C269.312 224.844 264.328 226.547 259.203 226.453C251.891 226.094 245.625 221.938 243.141 219.156C235.797 211.078 234.266 196.938 244.391 187.219L337.672 99.922C340.484 97.359 343.875 96 347.438 96H355.609C404.734 96 454.078 117.578 490.984 155.203L495.688 160H624C632.844 160 640 152.844 640 144S632.844 128 624 128H508.984C466.656 87.25 411.125 64 355.609 64H347.437C335.922 64 324.797 68.359 315.969 76.422L221.5 164.766L221.125 165.219ZM624 352H499.301C496.535 344.385 492.506 337.189 485.781 331.719L377.266 243.578C370.375 238 360.297 239.062 354.75 245.906C349.187 252.766 350.219 262.844 357.078 268.422L465.594 356.531C471.719 361.531 472.656 370.594 467.703 376.719L458.609 387.969C453.672 394.125 444.531 395 438.578 390.281L421.016 375.563L381.016 424.813C374.219 433.094 361.969 434.406 354.125 428L337.156 413.25L324.531 404.938L313.984 415.469C306.453 424.75 295.766 430.531 283.891 431.75C271.906 432.938 260.313 429.469 250.688 421.688L160.391 352H32C23.156 352 16 359.156 16 368S23.156 384 32 384H149.484L230.812 446.75C244.656 458 261.562 464 279.141 464C281.812 464 284.484 463.875 287.172 463.594C302.281 462.031 316.266 456.156 327.406 447.156L333.5 452.438C355.344 470.281 387.781 467 405.812 445.031L426.078 420.063C445.297 429.969 469.484 425.438 483.484 408.094L492.578 396.844C495.738 392.932 497.572 388.467 499.268 384H624C632.844 384 640 376.844 640 368S632.844 352 624 352Z" />
        </Icon>
    </>
}