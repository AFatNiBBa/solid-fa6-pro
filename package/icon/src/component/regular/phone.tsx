
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `phone` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=regular phone}
 * @preview ![phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuMjk4IDMyMC4yNTFMMzgyLjA5OCAyNzguMTczQzM2MC42OTIgMjY4Ljg5MiAzMzUuNDU5IDI3NS4wNjQgMzIwLjg5NyAyOTMuMTI2TDI5My40NiAzMjYuNjI2QzI0OC42OCAzMDAuODc2IDIxMS4xNjYgMjYzLjM3NiAxODUuNDE2IDIxOC42MjdMMjE4Ljk2MiAxOTEuMTQzQzIzNi44NjggMTc2LjUxOCAyNDMuMDU1IDE1MS40NCAyMzMuOTc3IDEzMC4wOTZMMTkxLjcyOSAzMS41MzRDMTgxLjU3MyA4LjMzMSAxNTYuMzg2IC00LjMyNSAxMzEuODU1IDEuMzQ3TDQwLjYwOCAyMi40MDlDMTYuNzAzIDI3Ljg2MiAwIDQ4LjgzMSAwIDczLjM5M0MwIDMxNS4yNTEgMTk2Ljc0NCA1MTIgNDM4LjU4MSA1MTJDNDYzLjE0MiA1MTIgNDg0LjExMSA0OTUuMzEzIDQ4OS41NzkgNDcxLjQ2OUw1MTAuNjQxIDM4MC4xMjZDNTE2LjM2IDM1NS40NyA1MDMuNjEgMzMwLjMxNCA0ODAuMjk4IDMyMC4yNTFaTTQ2My44NzcgMzY5LjMxM0w0NDIuNzk5IDQ2MC43MTlDNDQyLjMzMSA0NjIuNzE5IDQ0MC42OSA0NjQgNDM4LjU4MSA0NjRDMjIzLjIxMiA0NjQgNDcuOTk5IDI4OC43ODMgNDcuOTk5IDczLjM5M0M0Ny45OTkgNzEuMyA0OS4yOTUgNjkuNjU5IDUxLjM0MiA2OS4xOUwxNDIuNjgzIDQ4LjExMkMxNDIuOTk2IDQ4LjAzNCAxNDMuMzI0IDQ4LjAwMyAxNDMuNjM2IDQ4LjAwM0MxNDUuMzcxIDQ4LjAwMyAxNDYuOTk2IDQ5LjA1IDE0Ny42ODMgNTAuNjEyTDE4OS44MjIgMTQ4Ljk0QzE5MC41NzIgMTUwLjcwNSAxOTAuMDcyIDE1Mi43NjggMTg4LjU3MyAxNTQuMDAyTDEzOS43OTMgMTkzLjk3MUMxMzEuMTY4IDIwMS4wMzMgMTI4LjU0MyAyMTMuMTExIDEzMy40NDkgMjIzLjExMUMxNjYuNDY0IDI5MC4zNDUgMjIxLjcxMiAzNDUuNTYzIDI4OC45OTEgMzc4LjU5NEMyOTguOTkxIDM4My41MDEgMzExLjA4NSAzODAuODc2IDMxOC4xNDcgMzcyLjI1MUwzNTguMTYxIDMyMy4zNzZDMzU5LjI3MSAzMjEuOTcgMzYxLjM0OSAzMjEuNDM5IDM2My4wODMgMzIyLjI1MUw0NjEuMzQ2IDM2NC4zNDVDNDYzLjIyMSAzNjUuMTU3IDQ2NC4zNDYgMzY3LjM0NSA0NjMuODkyIDM2OS4zMTNINDYzLjg3N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Phone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480.298 320.251L382.098 278.173C360.692 268.892 335.459 275.064 320.897 293.126L293.46 326.626C248.68 300.876 211.166 263.376 185.416 218.627L218.962 191.143C236.868 176.518 243.055 151.44 233.977 130.096L191.729 31.534C181.573 8.331 156.386 -4.325 131.855 1.347L40.608 22.409C16.703 27.862 0 48.831 0 73.393C0 315.251 196.744 512 438.581 512C463.142 512 484.111 495.313 489.579 471.469L510.641 380.126C516.36 355.47 503.61 330.314 480.298 320.251ZM463.877 369.313L442.799 460.719C442.331 462.719 440.69 464 438.581 464C223.212 464 47.999 288.783 47.999 73.393C47.999 71.3 49.295 69.659 51.342 69.19L142.683 48.112C142.996 48.034 143.324 48.003 143.636 48.003C145.371 48.003 146.996 49.05 147.683 50.612L189.822 148.94C190.572 150.705 190.072 152.768 188.573 154.002L139.793 193.971C131.168 201.033 128.543 213.111 133.449 223.111C166.464 290.345 221.712 345.563 288.991 378.594C298.991 383.501 311.085 380.876 318.147 372.251L358.161 323.376C359.271 321.97 361.349 321.439 363.083 322.251L461.346 364.345C463.221 365.157 464.346 367.345 463.892 369.313H463.877Z" />
        </Icon>
    </>
}