
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-pilot` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-pilot?s=light user-pilot}
 * @preview ![user-pilot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjguODQ0IDk0LjMxOEwyMTYuODQ0IDExOC4zMTJDMjE5LjA5NCAxMTkuNDM4IDIyMS41NjIgMTIwIDIyNCAxMjBTMjI4LjkwNiAxMTkuNDM4IDIzMS4xNTYgMTE4LjMxMkwyNzkuMTU2IDk0LjMxOEMyODcuMDYyIDkwLjM1IDI5MC4yNSA4MC43NTggMjg2LjMxMiA3Mi44NTRDMjgyLjM0NCA2NC45NDkgMjcyLjc4MSA2MS43MzIgMjY0Ljg0NCA2NS42OTlMMjI0IDg2LjEzM0wxODMuMTU2IDY1LjY5OUMxNzUuMjUgNjEuNzY0IDE2NS42NTYgNjQuOTggMTYxLjY4OCA3Mi44NTRDMTU3Ljc1IDgwLjc1OCAxNjAuOTM4IDkwLjM1IDE2OC44NDQgOTQuMzE4Wk03Ny4zMzIgMTAyLjQyVjEyNC44ODVDNzcuMzMyIDEzNy45MjQgODUuMDQ1IDE1MC4xMDIgOTcuMjg5IDE1NC41ODRDMTM0LjI2NiAxNjguMTIzIDE3Ny41NjIgMTc2IDIyNCAxNzZTMzEzLjczNCAxNjguMTIzIDM1MC43MTMgMTU0LjU4NEMzNjIuOTU3IDE1MC4xMDIgMzcwLjY2OCAxMzcuOTI0IDM3MC42NjggMTI0Ljg4NVYxMDIuNDJMMzkyLjgxMiA4MC4xMTlDMzk3LjQxNiA3NS40ODQgNDAwIDY5LjE5NSA0MDAgNjIuNjQxQzQwMCA1MS4yOTUgMzkyLjMzNiA0MS40MDggMzgxLjQwOCAzOC42NThDMjM1LjcxNSAxLjk3OSAyMjkuMjA3IDAgMjI1LjQ3NSAwQzIyNS4wMjMgMCAyMjQuNjExIDAuMDI5IDIyNCAwLjAyOUMyMjMuNDA2IDAuMDI5IDIyMi45OTggMC4wMDIgMjIyLjU1NyAwLjAwMkMyMTguNzcgMC4wMDIgMjEyLjUwNCAxLjkyNCA2Ni41OTIgMzguNjU4QzU1LjY2NCA0MS40MDggNDggNTEuMjk1IDQ4IDYyLjY0MUM0OCA2OS4xOTUgNTAuNTg0IDc1LjQ4NCA1NS4xODggODAuMTE5TDc3LjMzMiAxMDIuNDJaTTE2Mi42NzIgNDcuNDI2QzIwMC4xNDUgMzcuOTYxIDIxOC4xMjcgMzMuNDIgMjI0LjAwNCAzMi4xMTdDMjI5LjkxIDMzLjQzIDI0Ny44OTggMzcuOTczIDI4NS4zMjQgNDcuNDI2TDM2MS4xODIgNjYuNTU5TDM0Ny45NjEgNzkuODczTDMzOC42NjggODkuMjNWMTAyLjQyTDMzOS43MTEgMTI0LjUzNUMzMDQuOTMgMTM3LjI3IDI2NC45MTYgMTQ0IDIyNCAxNDRTMTQzLjA3MiAxMzcuMjcgMTA5LjMzMiAxMjQuODg1Vjg5LjIzTDEwMC4wMzkgNzkuODczTDg2LjgyIDY2LjU1OUwxNjIuNjcyIDQ3LjQyNlpNMzM1LjcxOSAxOTJDMzI3Ljc0NCAxOTIgMzIwLjk5OCAxOTcuNzkzIDMxOS44NzEgMjA1LjYxN0MzMTMuMTggMjUyLjEyOSAyNzIuNzI3IDI4OCAyMjMuOTg0IDI4OEMxNzUuMjcxIDI4OCAxMzQuODIgMjUyLjEyOSAxMjguMTI5IDIwNS42MTdDMTI3LjAwNCAxOTcuNzkzIDEyMC4yNTYgMTkyIDExMi4yODMgMTkySDExMi4yODFDMTAyLjUwMiAxOTIgOTQuNzc3IDIwMC41OTggOTYuMTYgMjEwLjE5NUMxMDUuMDk2IDI3Mi4xOTkgMTU4Ljk5NiAzMjAgMjIzLjk4NCAzMjBTMzQyLjkgMjcyLjE5OSAzNTEuODQgMjEwLjE5NUMzNTMuMjIzIDIwMC42IDM0NS41IDE5MiAzMzUuNzE5IDE5MlpNMzIwIDM1MkwyMjQgNDE2TDEyOCAzNTJDNTcuMzA5IDM1MiAwIDQwOS4zMDcgMCA0ODBDMCA0OTcuNjc0IDE0LjMyOCA1MTIgMzIgNTEySDQxNkM0MzMuNjc0IDUxMiA0NDggNDk3LjY3NCA0NDggNDgwQzQ0OCA0MDkuMzA3IDM5MC42OTMgMzUyIDMyMCAzNTJaTTMyIDQ4MEMzMiA0MzAuMTE5IDcwLjI0MiAzODkgMTE4Ljk0NyAzODQuNDI0TDIwNi4yNSA0NDIuNjI1QzIxMS42MjUgNDQ2LjIwOSAyMTcuODEyIDQ0OCAyMjQgNDQ4QzIzMC4xODkgNDQ4IDIzNi4zNzcgNDQ2LjIwOSAyNDEuNzUgNDQyLjYyNUwzMjkuMDU1IDM4NC40MjRDMzc3Ljc2IDM4OSA0MTYgNDMwLjExOSA0MTYgNDgwSDMyWk0zNTIgNDE2SDMyMEMzMTEuMTY0IDQxNiAzMDQgNDIzLjE2NCAzMDQgNDMyUzMxMS4xNjQgNDQ4IDMyMCA0NDhIMzUyQzM2MC44MzggNDQ4IDM2OCA0NDAuODM2IDM2OCA0MzJTMzYwLjgzOCA0MTYgMzUyIDQxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserPilot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M168.844 94.318L216.844 118.312C219.094 119.438 221.562 120 224 120S228.906 119.438 231.156 118.312L279.156 94.318C287.062 90.35 290.25 80.758 286.312 72.854C282.344 64.949 272.781 61.732 264.844 65.699L224 86.133L183.156 65.699C175.25 61.764 165.656 64.98 161.688 72.854C157.75 80.758 160.938 90.35 168.844 94.318ZM77.332 102.42V124.885C77.332 137.924 85.045 150.102 97.289 154.584C134.266 168.123 177.562 176 224 176S313.734 168.123 350.713 154.584C362.957 150.102 370.668 137.924 370.668 124.885V102.42L392.812 80.119C397.416 75.484 400 69.195 400 62.641C400 51.295 392.336 41.408 381.408 38.658C235.715 1.979 229.207 0 225.475 0C225.023 0 224.611 0.029 224 0.029C223.406 0.029 222.998 0.002 222.557 0.002C218.77 0.002 212.504 1.924 66.592 38.658C55.664 41.408 48 51.295 48 62.641C48 69.195 50.584 75.484 55.188 80.119L77.332 102.42ZM162.672 47.426C200.145 37.961 218.127 33.42 224.004 32.117C229.91 33.43 247.898 37.973 285.324 47.426L361.182 66.559L347.961 79.873L338.668 89.23V102.42L339.711 124.535C304.93 137.27 264.916 144 224 144S143.072 137.27 109.332 124.885V89.23L100.039 79.873L86.82 66.559L162.672 47.426ZM335.719 192C327.744 192 320.998 197.793 319.871 205.617C313.18 252.129 272.727 288 223.984 288C175.271 288 134.82 252.129 128.129 205.617C127.004 197.793 120.256 192 112.283 192H112.281C102.502 192 94.777 200.598 96.16 210.195C105.096 272.199 158.996 320 223.984 320S342.9 272.199 351.84 210.195C353.223 200.6 345.5 192 335.719 192ZM320 352L224 416L128 352C57.309 352 0 409.307 0 480C0 497.674 14.328 512 32 512H416C433.674 512 448 497.674 448 480C448 409.307 390.693 352 320 352ZM32 480C32 430.119 70.242 389 118.947 384.424L206.25 442.625C211.625 446.209 217.812 448 224 448C230.189 448 236.377 446.209 241.75 442.625L329.055 384.424C377.76 389 416 430.119 416 480H32ZM352 416H320C311.164 416 304 423.164 304 432S311.164 448 320 448H352C360.838 448 368 440.836 368 432S360.838 416 352 416Z" />
        </Icon>
    </>
}