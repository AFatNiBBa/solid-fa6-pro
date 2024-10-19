
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-sparkles` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-sparkles?s=regular book-sparkles}
 * @preview ![book-sparkles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjQgNDAwQzQzNy4yNSA0MDAgNDQ4IDM4OS4yNSA0NDggMzc2VjI0QzQ0OCAxMC43NSA0MzcuMjUgMCA0MjQgMEg4MEMzNS44OTEgMCAwIDM1Ljg3NSAwIDgwVjQzMkMwIDQ3Ni4xMjUgMzUuODkxIDUxMiA4MCA1MTJINDI0QzQzNy4yNSA1MTIgNDQ4IDUwMS4yNSA0NDggNDg4UzQzNy4yNSA0NjQgNDI0IDQ2NEg0MTZWNDAwSDQyNFpNMzY4IDQ2NEg4MEM2Mi4zNTkgNDY0IDQ4IDQ0OS42NTYgNDggNDMyUzYyLjM1OSA0MDAgODAgNDAwSDM2OFY0NjRaTTQwMCAzNTJIODBDNjguNjI1IDM1MiA1Ny43OTcgMzU0LjM3NSA0OCAzNTguNjg4VjgwQzQ4IDYyLjM0NCA2Mi4zNTkgNDggODAgNDhINDAwVjM1MlpNMTU5Ljk5NiAxNDRMMTcyLjQxNiAxNzMuNzgxQzE3My4wMjUgMTc1LjAwOCAxNzQuNjI1IDE3NiAxNzUuOTkyIDE3NlMxNzguOTYxIDE3NS4wMDggMTc5LjU3IDE3My43ODFMMTkxLjk5IDE0NEwyMjEuNzc1IDEzMS41NzhDMjIyLjk5MiAxMzAuOTY5IDIyMy45ODQgMTI5LjM1OSAyMjMuOTg0IDEyOEMyMjMuOTg0IDEyNi42MzMgMjIyLjk5MiAxMjUuMDMxIDIyMS43NzUgMTI0LjQyMkwxOTEuOTkgMTEyTDE3OS41NyA4Mi4yMTlDMTc4Ljk2MSA4MC45OTIgMTc3LjM1OSA4MCAxNzUuOTkyIDgwUzE3My4wMjUgODAuOTkyIDE3Mi40MTYgODIuMjE5TDE1OS45OTYgMTEyTDEzMC4yMTEgMTI0LjQyMkMxMjguOTkyIDEyNS4wMzEgMTI4IDEyNi42MzMgMTI4IDEyOEMxMjggMTI5LjM1OSAxMjguOTkyIDEzMC45NjkgMTMwLjIxMSAxMzEuNTc4TDE1OS45OTYgMTQ0Wk0yMDguMDM1IDIzOS45NzdMMjA3Ljk4NiAyNDBMMjA4LjAzNSAyNDAuMDIzQzIwOC4wNDcgMjQyLjI4OSAyMDkuNjg4IDI0NC45NTMgMjExLjcxMSAyNDUuOTYxTDI2MS4wOTYgMjY2LjU1NUwyNjEuMzMgMjY2LjY3MkwyNjEuNDk2IDI2Ny4wMDRMMjgyLjA1NSAzMTYuMzAxQzI4My4wNjYgMzE4LjMzNiAyODUuNzA5IDMxOS45NzcgMjg3Ljk4IDMxOS45OTJMMjg3Ljk4NiAzMjBMMjg3Ljk5IDMxOS45OTJDMjg3Ljk5OCAzMTkuOTkyIDI4OC4wMDYgMzIwIDI4OC4wMTQgMzIwQzI5MC4yOTMgMzIwIDI5Mi45NjMgMzE4LjM0NCAyOTMuOTc5IDMxNi4zMDFMMzE0LjY3OCAyNjYuNjY0TDM2NC4zMTggMjQ1Ljk2MUMzNjYuMzQ4IDI0NC45NDUgMzY4IDI0Mi4yNjYgMzY4IDI0MEMzNjggMjM3LjcxOSAzNjYuMzQ4IDIzNS4wNTUgMzY0LjMxOCAyMzQuMDM5TDMxNC42NzggMjEzLjMzNkwyOTMuOTc5IDE2My42OTVDMjkyLjk2MyAxNjEuNjUyIDI5MC4yOTMgMTYwIDI4OC4wMTQgMTYwQzI4OC4wMDYgMTYwIDI4Ny45OTggMTYwLjAwOCAyODcuOTkgMTYwLjAwOEwyODcuOTg2IDE2MEwyODcuOTggMTYwLjAwOEMyODUuNzA5IDE2MC4wMjMgMjgzLjA2NiAxNjEuNjY0IDI4Mi4wNTUgMTYzLjY5NUwyNjEuNDkgMjEzLjAwOEwyNjEuMzMgMjEzLjMyOEwyNjEuMTE5IDIxMy40MzRMMjExLjcxMSAyMzQuMDM5QzIwOS42ODYgMjM1LjA0NyAyMDguMDQ3IDIzNy43MDcgMjA4LjAzNSAyMzkuOTc3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookSparkles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M424 400C437.25 400 448 389.25 448 376V24C448 10.75 437.25 0 424 0H80C35.891 0 0 35.875 0 80V432C0 476.125 35.891 512 80 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H416V400H424ZM368 464H80C62.359 464 48 449.656 48 432S62.359 400 80 400H368V464ZM400 352H80C68.625 352 57.797 354.375 48 358.688V80C48 62.344 62.359 48 80 48H400V352ZM159.996 144L172.416 173.781C173.025 175.008 174.625 176 175.992 176S178.961 175.008 179.57 173.781L191.99 144L221.775 131.578C222.992 130.969 223.984 129.359 223.984 128C223.984 126.633 222.992 125.031 221.775 124.422L191.99 112L179.57 82.219C178.961 80.992 177.359 80 175.992 80S173.025 80.992 172.416 82.219L159.996 112L130.211 124.422C128.992 125.031 128 126.633 128 128C128 129.359 128.992 130.969 130.211 131.578L159.996 144ZM208.035 239.977L207.986 240L208.035 240.023C208.047 242.289 209.688 244.953 211.711 245.961L261.096 266.555L261.33 266.672L261.496 267.004L282.055 316.301C283.066 318.336 285.709 319.977 287.98 319.992L287.986 320L287.99 319.992C287.998 319.992 288.006 320 288.014 320C290.293 320 292.963 318.344 293.979 316.301L314.678 266.664L364.318 245.961C366.348 244.945 368 242.266 368 240C368 237.719 366.348 235.055 364.318 234.039L314.678 213.336L293.979 163.695C292.963 161.652 290.293 160 288.014 160C288.006 160 287.998 160.008 287.99 160.008L287.986 160L287.98 160.008C285.709 160.023 283.066 161.664 282.055 163.695L261.49 213.008L261.33 213.328L261.119 213.434L211.711 234.039C209.686 235.047 208.047 237.707 208.035 239.977Z" />
        </Icon>
    </>
}