
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-sparkles` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-sparkles?s=light hand-sparkles}
 * @preview ![hand-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgNDE2QzMyOC44NDQgNDE2IDMzNiA0MDguODQ0IDMzNiA0MDBWMzY4SDM2OEMzNzYuODQ0IDM2OCAzODQgMzYwLjg0NCAzODQgMzUyUzM3Ni44NDQgMzM2IDM2OCAzMzZIMzM2VjMwNEMzMzYgMjk1LjE1NiAzMjguODQ0IDI4OCAzMjAgMjg4UzMwNCAyOTUuMTU2IDMwNCAzMDRWMzM2SDI3MkMyNjMuMTU2IDMzNiAyNTYgMzQzLjE1NiAyNTYgMzUyUzI2My4xNTYgMzY4IDI3MiAzNjhIMzA0VjQwMEMzMDQgNDA4Ljg0NCAzMTEuMTU2IDQxNiAzMjAgNDE2Wk04MCAyMjRDODguODQ0IDIyNCA5NiAyMTYuODQ0IDk2IDIwOFYxNjBIMTI4QzEzNi44NDQgMTYwIDE0NCAxNTIuODQ0IDE0NCAxNDRTMTM2Ljg0NCAxMjggMTI4IDEyOEg5NlY4MEM5NiA3MS4xNTYgODguODQ0IDY0IDgwIDY0UzY0IDcxLjE1NiA2NCA4MFYxMjhIMTZDNy4xNTYgMTI4IDAgMTM1LjE1NiAwIDE0NFM3LjE1NiAxNjAgMTYgMTYwSDY0VjIwOEM2NCAyMTYuODQ0IDcxLjE1NiAyMjQgODAgMjI0Wk02MjQgNDE2SDU3NlYzNjhDNTc2IDM1OS4xNTYgNTY4Ljg0NCAzNTIgNTYwIDM1MlM1NDQgMzU5LjE1NiA1NDQgMzY4VjQxNkg0OTZDNDg3LjE1NiA0MTYgNDgwIDQyMy4xNTYgNDgwIDQzMlM0ODcuMTU2IDQ0OCA0OTYgNDQ4SDU0NFY0OTZDNTQ0IDUwNC44NDQgNTUxLjE1NiA1MTIgNTYwIDUxMlM1NzYgNTA0Ljg0NCA1NzYgNDk2VjQ0OEg2MjRDNjMyLjg0NCA0NDggNjQwIDQ0MC44NDQgNjQwIDQzMlM2MzIuODQ0IDQxNiA2MjQgNDE2Wk00NTYuODgzIDQ1OS42NzNDNDQ1LjA1MiA0NTkuNjczIDQyOC44MzMgNDgwIDM4My45OTYgNDgwSDI4Mi4yMDFDMjQ0Ljk0NSA0ODAgMjA5Ljc4NSA0NjEuODc1IDE4Ny44NDYgNDMxLjEwOUwxMDEuMTkzIDMxNy4yMzRDOTcuNjU3IDMxMi41ODIgOTUuOTE1IDMwNy4wOCA5NS45MTUgMzAxLjczNUM5NS45MTUgMjg4LjQzIDEwNi40NzkgMjc5LjMyOCAxMTguMTggMjc5LjMyOEMxMjMuOTQzIDI3OS4zMjggMTMxLjIyNSAyODEuNTkyIDEzNy4wNTUgMjg5LjI2NkwxNzEuMjUgMzM0LjI1QzE3Ny40OTggMzQyLjQ3MiAxODcuMTQ0IDM0Ny4xMTUgMTk2LjgxMiAzNDcuMTE1QzIwMC44NDQgMzQ3LjExNSAyMjQuMDE3IDM0NC41MTEgMjI0LjAxNyAzMjAuOTg2QzIyNC4wMTcgMzIwLjY1OSAyMjQuMDExIDMyMC4zMyAyMjQgMzIwVjg4Ljk0N0MyMjQgNzYuNTI2IDIzMy4yNDcgNjQgMjQ4LjAwMSA2NEMyNjEuMjM1IDY0IDI3MiA3NC43NjYgMjcyIDg4VjIzOS4xNjZDMjcyIDI0MS45MzkgMjc0LjE4OCAyNTYgMjg4IDI1NkMyOTYuODQzIDI1NiAzMDQgMjQ4Ljg0MyAzMDQgMjQwVjg4QzMwNCA4Ny44OTUgMzAzLjk2OSA4Ny43OTcgMzAzLjk2OSA4Ny42OTFWNTYuOTQ5QzMwMy45NjkgNDQuNTI4IDMxMy4yMTYgMzIgMzI3Ljk3NCAzMkMzNDEuMjEgMzIgMzUxLjk3NSA0Mi43NjYgMzUxLjk3NSA1NlYyMzkuMTY2QzM1MS45NzUgMjQxLjkzOSAzNTQuMTYyIDI1NiAzNjcuOTc3IDI1NkMzNzYuODIyIDI1NiAzODMuOTggMjQ4Ljg0MyAzODMuOTggMjQwVjg4Ljk0N0MzODMuOTggNzYuNTI2IDM5My4yMjggNjQgNDA3Ljk4NCA2NEM0MjEuMjIgNjQgNDMxLjk4NiA3NC43NjYgNDMxLjk4NiA4OFYyMzguNzRDNDMxLjk4NiAyNDEuNTEzIDQzNC4xNzQgMjU1LjU3NyA0NDcuOTg5IDI1NS41NzdDNDU2LjgzMyAyNTUuNTc3IDQ2My45OSAyNDguNDIyIDQ2My45OSAyMzkuNTc4VjEzNi4yNzNDNDYzLjk5IDEyMy43OTQgNDczLjI4NSAxMTEuMjk3IDQ4Ny45OTQgMTExLjI5N0M1MDEuMjI5IDExMS4yOTcgNTExLjk5NiAxMjIuMDkzIDUxMS45OTYgMTM1LjM1OVYzMDAuMTExQzUxMS45OTYgMzA4LjkzNCA1MTkuMTQ4IDMxNi4wODYgNTI3Ljk2OSAzMTYuMDg2SDUyOC4wMjdDNTM2Ljg0OCAzMTYuMDg2IDU0NCAzMDguOTM0IDU0NCAzMDAuMTExVjEzNy4zNTlDNTQ0IDExNS42MiA1MjcuNTI1IDc5LjI5NiA0ODcuOTkgNzkuMjk2QzQ3OS4zNjYgNzkuMjk2IDQ3MS4xOTIgODEuMjUgNDYzLjg5NiA4NC43NUM0NjIuMjA5IDU1LjM3NSA0MzcuNzgzIDMyIDQwNy45ODIgMzJDMzk4LjMyNCAzMiAzODkuMjE1IDM0LjQ2OSAzODEuMjc1IDM4Ljc4MUMzNzMuOTk0IDE2LjI5NyAzNTIuODUyIDAgMzI3Ljk3MyAwQzMwMi45OTggMCAyODIuMDU3IDE2LjU1MSAyNzQuODY1IDM5LjE3NEMyNjYuODU0IDM0Ljc0NCAyNTcuNzgzIDMyIDI0Ny45OTkgMzJDMjA4LjM4MyAzMiAxOTIgNjguNjEgMTkyIDkwLjc5M1YzMDcuODc1TDE2MS43NjQgMjY4Ljg3NUMxNTEuNDk1IDI1NS40NDQgMTM1LjM4MiAyNDcuMzU4IDExOC40NTMgMjQ3LjM1OEM4OC44ODkgMjQ3LjM1OCA2My45OTkgMjcwLjQyMSA2My45OTkgMzAxLjgxNUM2My45OTkgMzEzLjk1NyA2Ny44NTUgMzI2LjI3MSA3NS43MjEgMzM2LjYwOUwxNjIuMDc2IDQ1MC4wNzhDMTg5LjcwNSA0ODguODU5IDIzNC42MTcgNTEyIDI4Mi4yMDEgNTEySDM4My45OTZDNDE2LjE2MSA1MTIgNDcyLjc3MSA0OTYuODQ3IDQ3Mi43NzEgNDc1LjU4M0M0NzIuNzcxIDQ2OS41MTIgNDY4LjA1NyA0NTkuNjczIDQ1Ni44ODMgNDU5LjY3M1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandSparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320 416C328.844 416 336 408.844 336 400V368H368C376.844 368 384 360.844 384 352S376.844 336 368 336H336V304C336 295.156 328.844 288 320 288S304 295.156 304 304V336H272C263.156 336 256 343.156 256 352S263.156 368 272 368H304V400C304 408.844 311.156 416 320 416ZM80 224C88.844 224 96 216.844 96 208V160H128C136.844 160 144 152.844 144 144S136.844 128 128 128H96V80C96 71.156 88.844 64 80 64S64 71.156 64 80V128H16C7.156 128 0 135.156 0 144S7.156 160 16 160H64V208C64 216.844 71.156 224 80 224ZM624 416H576V368C576 359.156 568.844 352 560 352S544 359.156 544 368V416H496C487.156 416 480 423.156 480 432S487.156 448 496 448H544V496C544 504.844 551.156 512 560 512S576 504.844 576 496V448H624C632.844 448 640 440.844 640 432S632.844 416 624 416ZM456.883 459.673C445.052 459.673 428.833 480 383.996 480H282.201C244.945 480 209.785 461.875 187.846 431.109L101.193 317.234C97.657 312.582 95.915 307.08 95.915 301.735C95.915 288.43 106.479 279.328 118.18 279.328C123.943 279.328 131.225 281.592 137.055 289.266L171.25 334.25C177.498 342.472 187.144 347.115 196.812 347.115C200.844 347.115 224.017 344.511 224.017 320.986C224.017 320.659 224.011 320.33 224 320V88.947C224 76.526 233.247 64 248.001 64C261.235 64 272 74.766 272 88V239.166C272 241.939 274.188 256 288 256C296.843 256 304 248.843 304 240V88C304 87.895 303.969 87.797 303.969 87.691V56.949C303.969 44.528 313.216 32 327.974 32C341.21 32 351.975 42.766 351.975 56V239.166C351.975 241.939 354.162 256 367.977 256C376.822 256 383.98 248.843 383.98 240V88.947C383.98 76.526 393.228 64 407.984 64C421.22 64 431.986 74.766 431.986 88V238.74C431.986 241.513 434.174 255.577 447.989 255.577C456.833 255.577 463.99 248.422 463.99 239.578V136.273C463.99 123.794 473.285 111.297 487.994 111.297C501.229 111.297 511.996 122.093 511.996 135.359V300.111C511.996 308.934 519.148 316.086 527.969 316.086H528.027C536.848 316.086 544 308.934 544 300.111V137.359C544 115.62 527.525 79.296 487.99 79.296C479.366 79.296 471.192 81.25 463.896 84.75C462.209 55.375 437.783 32 407.982 32C398.324 32 389.215 34.469 381.275 38.781C373.994 16.297 352.852 0 327.973 0C302.998 0 282.057 16.551 274.865 39.174C266.854 34.744 257.783 32 247.999 32C208.383 32 192 68.61 192 90.793V307.875L161.764 268.875C151.495 255.444 135.382 247.358 118.453 247.358C88.889 247.358 63.999 270.421 63.999 301.815C63.999 313.957 67.855 326.271 75.721 336.609L162.076 450.078C189.705 488.859 234.617 512 282.201 512H383.996C416.161 512 472.771 496.847 472.771 475.583C472.771 469.512 468.057 459.673 456.883 459.673Z" />
        </Icon>
    </>
}