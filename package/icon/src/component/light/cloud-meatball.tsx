
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-meatball` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-meatball?s=light cloud-meatball}
 * @preview ![cloud-meatball](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04MCAzNTJDNTMuNSAzNTIgMzIgMzczLjUgMzIgNDAwUzUzLjUgNDQ4IDgwIDQ0OFMxMjggNDI2LjUgMTI4IDQwMFMxMDYuNSAzNTIgODAgMzUyWk04MCA0MTZDNzEuMjUgNDE2IDY0IDQwOC43NSA2NCA0MDBTNzEuMjUgMzg0IDgwIDM4NFM5NiAzOTEuMjUgOTYgNDAwUzg4Ljc1IDQxNiA4MCA0MTZaTTM3OC41IDI5My41QzM2Ni4yNSAyODEuMjUgMzQ5LjI1IDI3NS42MjUgMzMyLjI1IDI3Ny4yNUMzMTAuMzc1IDI1MC42MjUgMjY1LjUgMjUwLjYyNSAyNDMuNzUgMjc3LjI1QzIyNi44NzUgMjc1LjYyNSAyMDkuNzUgMjgxLjI1IDE5Ny41IDI5My41UzE3OS41IDMyMi43NSAxODEuMjUgMzM5Ljc1QzE2Ny44NzUgMzUwLjc1IDE2MCAzNjYuNzUgMTYwIDM4NFMxNjcuODc1IDQxNy4yNSAxODEuMjUgNDI4LjI1QzE3OS41IDQ0NS4yNSAxODUuMjUgNDYyLjI1IDE5Ny41IDQ3NC41UzIyOCA0OTMuNSAyNDQgNDkxLjEyNUMyNTQuODc1IDUwNC4yNSAyNzAuNzUgNTEyIDI4OCA1MTJTMzIxLjEyNSA1MDQuMjUgMzMyIDQ5MS4xMjVDMzQ4LjI1IDQ5My41IDM2Ni4yNSA0ODYuNzUgMzc4LjUgNDc0LjVTMzk2LjUgNDQ1LjI1IDM5NC43NSA0MjguMjVDNDA4LjEyNSA0MTcuMjUgNDE2IDQwMS4yNSA0MTYgMzg0UzQwOC4xMjUgMzUwLjc1IDM5NC43NSAzMzkuNzVDMzk2LjUgMzIyLjc1IDM5MC43NSAzMDUuNzUgMzc4LjUgMjkzLjVaTTM2OS43NSA0MDYuNzVMMzU3Ljc1IDQxMi44NzVMMzYxLjg3NSA0MjUuNzVDMzY0Ljg3NSA0MzUuMjUgMzYyLjc1IDQ0NS4yNSAzNTYgNDUxLjg3NUMzNTEuMTI1IDQ1Ni43NSAzNDQuNjI1IDQ1OS41IDMzNy42MjUgNDU5LjVDMzM1LjYyNSA0NTkuNSAzMzMuMTI1IDQ1OC43NSAzMjkuNzUgNDU3Ljc1TDMxNyA0NTMuNzVMMzEwLjc1IDQ2NS43NUMzMDEuNjI1IDQ4My4zNzUgMjc0LjYyNSA0ODMuMzc1IDI2NS4zNzUgNDY1Ljc1TDI1OS4yNSA0NTMuNzVMMjQ2LjM3NSA0NTcuNzVDMjQzLjI1IDQ1OC43NSAyNDAuNjI1IDQ1OS41IDIzOC42MjUgNDU5LjVDMjMxLjc1IDQ1OS41IDIyNS4xMjUgNDU2Ljc1IDIyMC4yNSA0NTEuODc1QzIxMy41IDQ0NS4yNSAyMTEuMjUgNDM1LjI1IDIxNC4yNSA0MjUuNzVMMjE4LjM3NSA0MTIuODc1TDIwNi41IDQwNi43NUMxOTcuNzUgNDAyLjEyNSAxOTIuMjUgMzkzLjM3NSAxOTIuMjUgMzg0UzE5Ny43NSAzNjUuODc1IDIwNi41IDM2MS4yNUwyMTguMzc1IDM1NS4xMjVMMjE0LjI1IDM0Mi4yNUMyMTEuMjUgMzMyLjc1IDIxMy41IDMyMi43NSAyMjAuMjUgMzE2LjEyNUMyMjYuODc1IDMwOS4zNzUgMjM2Ljg3NSAzMDcuMjUgMjQ2LjM3NSAzMTAuMjVMMjU5LjI1IDMxNC4yNUwyNjUuMzc1IDMwMi4zNzVDMjc0LjYyNSAyODQuNzUgMzAxLjYyNSAyODQuNzUgMzEwLjc1IDMwMi4zNzVMMzE3IDMxNC4yNUwzMjkuNzUgMzEwLjI1QzMzOS4yNSAzMDcuMjUgMzQ5LjI1IDMwOS4zNzUgMzU2IDMxNi4xMjVDMzYyLjc1IDMyMi43NSAzNjQuODc1IDMzMi43NSAzNjEuODc1IDM0Mi4yNUwzNTcuNzUgMzU1LjEyNUwzNjkuNzUgMzYxLjI1QzM3OC41IDM2NS44NzUgMzg0IDM3NC42MjUgMzg0IDM4NFMzNzguNSA0MDIuMTI1IDM2OS43NSA0MDYuNzVaTTU0NCAyMTZDNTQ0IDE2MS4yNSA1MDEuMzc1IDExNi4yNSA0NDcuNzUgMTEyLjI1QzQ0My43NSA2Ny4zNzUgNDA1Ljg3NSAzMiAzNjAgMzJDMzQyLjI1IDMyIDMyNS4yNSAzNy4yNSAzMTAuNzUgNDcuMjVDMjg4LjI1IDE3Ljc1IDI1My41IDAgMjE2IDBDMTQ5Ljc1IDAgOTYgNTMuNzUgOTYgMTIwVjEyMC4zNzVDNTIuMzIgMTM4LjY0NiAyNC45NDEgMTg0Ljk1NSAzMy41OTYgMjM0LjE3MkM0Mi40NDEgMjg0LjQ4MiA4OC4xMzEgMzIwIDEzOS4yMTMgMzIwQzEzOS4yMTMgMzIwIDE0Mi4yOTMgMzIwIDE0NCAzMjBDMTUyLjgzNiAzMjAgMTYwIDMxMi44MzYgMTYwIDMwNEMxNjAgMjk1LjE2MiAxNTIuODM2IDI4OCAxNDQgMjg4QzE0Mi4wMTYgMjg4IDEzOC4zNzMgMjg4IDEzOC4zNzMgMjg4QzEwNS4zNTcgMjg4IDc1LjA1MSAyNjYuNzc3IDY2LjUxIDIzNC44ODVDNTUuOTQ1IDE5NS40MzggNzkuODQ4IDE1Ni44ODMgMTE3LjI1IDE0Ni43NUMxMjQuOTIyIDE0NC43NDIgMTI5Ljk0NSAxMzcuMzk1IDEyOS4wMzMgMTI5LjUxNkMxMjguNzg5IDEyNy40MTQgMTI3Ljg1NSAxMjAuMjkxIDEyOC4xMjkgMTE1LjIxOUMxMzAuNjIzIDY4LjkzIDE2OS4xMDQgMzIgMjE2IDMyQzI0OC4yNSAzMiAyNzcuNzUgNDkuODc1IDI5My4yNSA3OC43NUwyOTMuMjU0IDc4Ljc1OEMyOTguMzc5IDg4LjQ1OSAzMTEuNTU1IDkwLjE4MiAzMTkgODIuMTI1QzMzMS43NzEgNjguMzI2IDM0OS41NDMgNjEuOTM5IDM2OC4yNjQgNjQuNTg2QzM5My42MTMgNjguMTcyIDQxMi41ODQgODkuOTAyIDQxNS42MDIgMTE1LjMyNkM0MTYuMjMyIDEyMC42MzMgNDE2LjExNSAxMjAuMzkxIDQxNS4yNSAxMjYuODc1QzQxMy45NjkgMTM3LjEyMyA0MjIuNTgyIDE0NS44ODMgNDMyLjg1NyAxNDQuODQyQzQzNy42NDEgMTQ0LjM1NyA0MzcuODM2IDE0NC4xNjIgNDM5LjQ1NSAxNDQuMTI5QzQ2OC4xNzggMTQzLjU2MSA0OTQuOTM0IDE1OS42NiA1MDUuODkxIDE4Ni4yMTdDNTI3LjI3NyAyMzguMDQxIDQ4OS40MzkgMjg4LjEyNSA0NDAgMjg4LjEyNUM0NDAgMjg4LjEyNSA0MzQuOTc5IDI4OCA0MzIgMjg4QzQyMy4xNjQgMjg4IDQxNiAyOTUuMTYyIDQxNiAzMDRDNDE2IDMxMi44MzYgNDIzLjE2NCAzMjAgNDMyIDMyMEM0MzQuOTc5IDMyMCA0NDAgMzIwLjEyNSA0NDAgMzIwLjEyNUM0OTcuMjUgMzIwIDU0NCAyNzMuMjUgNTQ0IDIxNlpNNDk2IDM1MkM0NjkuNSAzNTIgNDQ4IDM3My41IDQ0OCA0MDBTNDY5LjUgNDQ4IDQ5NiA0NDhTNTQ0IDQyNi41IDU0NCA0MDBTNTIyLjUgMzUyIDQ5NiAzNTJaTTQ5NiA0MTZDNDg3LjI1IDQxNiA0ODAgNDA4Ljc1IDQ4MCA0MDBTNDg3LjI1IDM4NCA0OTYgMzg0UzUxMiAzOTEuMjUgNTEyIDQwMFM1MDQuNzUgNDE2IDQ5NiA0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudMeatball(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M80 352C53.5 352 32 373.5 32 400S53.5 448 80 448S128 426.5 128 400S106.5 352 80 352ZM80 416C71.25 416 64 408.75 64 400S71.25 384 80 384S96 391.25 96 400S88.75 416 80 416ZM378.5 293.5C366.25 281.25 349.25 275.625 332.25 277.25C310.375 250.625 265.5 250.625 243.75 277.25C226.875 275.625 209.75 281.25 197.5 293.5S179.5 322.75 181.25 339.75C167.875 350.75 160 366.75 160 384S167.875 417.25 181.25 428.25C179.5 445.25 185.25 462.25 197.5 474.5S228 493.5 244 491.125C254.875 504.25 270.75 512 288 512S321.125 504.25 332 491.125C348.25 493.5 366.25 486.75 378.5 474.5S396.5 445.25 394.75 428.25C408.125 417.25 416 401.25 416 384S408.125 350.75 394.75 339.75C396.5 322.75 390.75 305.75 378.5 293.5ZM369.75 406.75L357.75 412.875L361.875 425.75C364.875 435.25 362.75 445.25 356 451.875C351.125 456.75 344.625 459.5 337.625 459.5C335.625 459.5 333.125 458.75 329.75 457.75L317 453.75L310.75 465.75C301.625 483.375 274.625 483.375 265.375 465.75L259.25 453.75L246.375 457.75C243.25 458.75 240.625 459.5 238.625 459.5C231.75 459.5 225.125 456.75 220.25 451.875C213.5 445.25 211.25 435.25 214.25 425.75L218.375 412.875L206.5 406.75C197.75 402.125 192.25 393.375 192.25 384S197.75 365.875 206.5 361.25L218.375 355.125L214.25 342.25C211.25 332.75 213.5 322.75 220.25 316.125C226.875 309.375 236.875 307.25 246.375 310.25L259.25 314.25L265.375 302.375C274.625 284.75 301.625 284.75 310.75 302.375L317 314.25L329.75 310.25C339.25 307.25 349.25 309.375 356 316.125C362.75 322.75 364.875 332.75 361.875 342.25L357.75 355.125L369.75 361.25C378.5 365.875 384 374.625 384 384S378.5 402.125 369.75 406.75ZM544 216C544 161.25 501.375 116.25 447.75 112.25C443.75 67.375 405.875 32 360 32C342.25 32 325.25 37.25 310.75 47.25C288.25 17.75 253.5 0 216 0C149.75 0 96 53.75 96 120V120.375C52.32 138.646 24.941 184.955 33.596 234.172C42.441 284.482 88.131 320 139.213 320C139.213 320 142.293 320 144 320C152.836 320 160 312.836 160 304C160 295.162 152.836 288 144 288C142.016 288 138.373 288 138.373 288C105.357 288 75.051 266.777 66.51 234.885C55.945 195.438 79.848 156.883 117.25 146.75C124.922 144.742 129.945 137.395 129.033 129.516C128.789 127.414 127.855 120.291 128.129 115.219C130.623 68.93 169.104 32 216 32C248.25 32 277.75 49.875 293.25 78.75L293.254 78.758C298.379 88.459 311.555 90.182 319 82.125C331.771 68.326 349.543 61.939 368.264 64.586C393.613 68.172 412.584 89.902 415.602 115.326C416.232 120.633 416.115 120.391 415.25 126.875C413.969 137.123 422.582 145.883 432.857 144.842C437.641 144.357 437.836 144.162 439.455 144.129C468.178 143.561 494.934 159.66 505.891 186.217C527.277 238.041 489.439 288.125 440 288.125C440 288.125 434.979 288 432 288C423.164 288 416 295.162 416 304C416 312.836 423.164 320 432 320C434.979 320 440 320.125 440 320.125C497.25 320 544 273.25 544 216ZM496 352C469.5 352 448 373.5 448 400S469.5 448 496 448S544 426.5 544 400S522.5 352 496 352ZM496 416C487.25 416 480 408.75 480 400S487.25 384 496 384S512 391.25 512 400S504.75 416 496 416Z" />
        </Icon>
    </>
}