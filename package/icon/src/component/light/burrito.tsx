
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `burrito` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/burrito?s=light burrito}
 * @preview ![burrito](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTEuOTU3IDEyMy4wNDhDNTExLjk1NyA5MC41NDcgNDkwLjcwNiA2MS45MjEgNDU5LjcwNSA1Mi4yOTVDNDUzLjQ1NCAzMS45MiA0MzguNzA0IDE1LjI5NCA0MTkuMjAzIDYuNTQ0QzM5OS43MDIgLTIuMjA3IDM3Ny40NTIgLTIuMDgyIDM1OC4wNzYgNi43OTRDMzE3LjMyNCAtMTEuMDgyIDI2OS44MjMgNy41NDQgMjUyLjA3MiA0OC4yOTVMMzMuOTM5IDI2Ni41NTNDLTExLjMxMyAzMTEuODA1IC0xMS4zMTMgMzg1LjMwOCAzMy45MzkgNDMwLjU1OUw4MS40NDEgNDc4LjA2MUMxMjYuNjkyIDUyMy4zMTMgMjAwLjE5NSA1MjMuMzEzIDI0NS40NDcgNDc4LjA2MUw0NjMuNzA1IDI1OS45MjhDNTA0LjQ1NiAyNDIuMTc3IDUyMy4wODIgMTk0LjY3NiA1MDUuMjA2IDE1My45MjRDNTA5LjcwNyAxNDQuMjk5IDUxMS45NTcgMTMzLjY3MyA1MTEuOTU3IDEyMy4wNDhaTTI2Ny40NDggNzguMTcxQzI4MC45NDggMTAzLjQyMiAyODcuOTQ4IDEzMS41NDggMjg3Ljk0OCAxNjAuMDQ5QzI4Ny45NDggMjU3LjA1MyAyMDguOTQ1IDMzNi4wNTYgMTExLjk0MiAzMzYuMDU2Qzg2LjE5MSAzMzUuOTMxIDYwLjY5IDMzMC4xODEgMzcuNDM5IDMxOS4xOEM0MS41NjQgMzA3LjkzIDQ4LjA2NCAyOTcuNjc5IDU2LjU2NSAyODkuMTc5TDI2Ny40NDggNzguMTcxWk0yMjIuODIxIDQ1NS40MzVDMTkwLjA3IDQ4OC4zMTIgMTM2LjgxOCA0ODguMzEyIDEwNC4wNjYgNDU1LjQzNUw1Ni41NjUgNDA3LjkzNEM0MS42ODkgMzkzLjA1OCAzMy4wNjQgMzczLjE4MiAzMi4zMTQgMzUyLjE4MkM1Ny41NjUgMzYyLjY4MiA4NC41NjYgMzY4LjA1NyAxMTEuOTQyIDM2OC4wNTdDMjAyLjA3IDM2OC4wNTcgMjc4LjgyMyAzMTAuMzA1IDMwNy41NzQgMjI5LjkyN0MzNTAuMDc2IDIxOS4wNTIgMzk1LjA3NyAyMjQuMzAyIDQzMy45NTQgMjQ0LjQyOEwyMjIuODIxIDQ1NS40MzVaTTQ3OS45NTUgMTg2LjA1QzQ3OS45NTUgMjAxLjQyNiA0NzIuNTggMjE0LjY3NiA0NjEuNTggMjIzLjY3N0M0MTguNDUzIDE5Ni45MjYgMzY2LjIwMSAxODcuMTc1IDMxNi42OTkgMTk1LjQyNkMzMTguODI0IDE4My44IDMxOS44MjQgMTcxLjkyNSAzMTkuOTQ5IDE2MC4wNDlDMzE5Ljk0OSAxMjAuOTIzIDMwOC42OTkgODMuNTQ2IDI4OC4xOTggNTAuNjdDMjk3LjE5OSAzOC45MiAzMTEuMTk5IDMyLjE3IDMyNS45NSAzMi4wNDVDMzM4LjA3NSAzMi4wNDUgMzQ5LjgyNiAzNi42NyAzNTguODI2IDQ0LjkyQzM3MC43MDEgMzIuNTQ1IDM4OC44MjcgMjguNjY5IDQwNC43MDMgMzUuMDQ1QzQyMC41NzggNDEuNTQ1IDQzMC45NTQgNTYuOTIgNDMwLjk1NCA3NC4wNDZDNDMwLjk1NCA3Ni42NzEgNDMwLjcwNCA3OS4yOTYgNDMwLjIwNCA4MS43OTZDNDQyLjQ1NCA3OS40MjEgNDU1LjIwNCA4Mi42NzEgNDY0LjgzIDkwLjY3MkM0NzQuNDU1IDk4LjY3MiA0ODAuMDggMTEwLjU0NyA0NzkuOTU1IDEyMy4wNDhDNDc5Ljk1NSAxMzQuNDIzIDQ3NS4zMyAxNDUuMjk5IDQ2Ny4wOCAxNTMuMTc0QzQ3NS4zMyAxNjIuMTc0IDQ3OS45NTUgMTczLjkyNSA0NzkuOTU1IDE4Ni4wNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Burrito(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M511.957 123.048C511.957 90.547 490.706 61.921 459.705 52.295C453.454 31.92 438.704 15.294 419.203 6.544C399.702 -2.207 377.452 -2.082 358.076 6.794C317.324 -11.082 269.823 7.544 252.072 48.295L33.939 266.553C-11.313 311.805 -11.313 385.308 33.939 430.559L81.441 478.061C126.692 523.313 200.195 523.313 245.447 478.061L463.705 259.928C504.456 242.177 523.082 194.676 505.206 153.924C509.707 144.299 511.957 133.673 511.957 123.048ZM267.448 78.171C280.948 103.422 287.948 131.548 287.948 160.049C287.948 257.053 208.945 336.056 111.942 336.056C86.191 335.931 60.69 330.181 37.439 319.18C41.564 307.93 48.064 297.679 56.565 289.179L267.448 78.171ZM222.821 455.435C190.07 488.312 136.818 488.312 104.066 455.435L56.565 407.934C41.689 393.058 33.064 373.182 32.314 352.182C57.565 362.682 84.566 368.057 111.942 368.057C202.07 368.057 278.823 310.305 307.574 229.927C350.076 219.052 395.077 224.302 433.954 244.428L222.821 455.435ZM479.955 186.05C479.955 201.426 472.58 214.676 461.58 223.677C418.453 196.926 366.201 187.175 316.699 195.426C318.824 183.8 319.824 171.925 319.949 160.049C319.949 120.923 308.699 83.546 288.198 50.67C297.199 38.92 311.199 32.17 325.95 32.045C338.075 32.045 349.826 36.67 358.826 44.92C370.701 32.545 388.827 28.669 404.703 35.045C420.578 41.545 430.954 56.92 430.954 74.046C430.954 76.671 430.704 79.296 430.204 81.796C442.454 79.421 455.204 82.671 464.83 90.672C474.455 98.672 480.08 110.547 479.955 123.048C479.955 134.423 475.33 145.299 467.08 153.174C475.33 162.174 479.955 173.925 479.955 186.05Z" />
        </Icon>
    </>
}