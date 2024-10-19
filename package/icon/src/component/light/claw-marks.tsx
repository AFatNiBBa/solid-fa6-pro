
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `claw-marks` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/claw-marks?s=light claw-marks}
 * @preview ![claw-marks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjcuMzEyIDQwNC42ODhDNDI0LjMxMiA0MDEuNjg4IDQyMC4yNSA0MDAgNDE2IDQwMEgzNjhWMzUyQzM2OCAzNDcuNzUgMzY2LjMxMiAzNDMuNjg4IDM2My4zMTIgMzQwLjY4OEwyNjcuMzEyIDI0NC42ODhDMjY0LjMxMiAyNDEuNjg4IDI2MC4yNSAyNDAgMjU2IDI0MEgyMDhWMTkyQzIwOCAxODcuNzUgMjA2LjMxMiAxODMuNjg4IDIwMy4zMTIgMTgwLjY4OEwyNy4zMTIgNC42ODhDMjQuMTg4IDEuNTYyIDIwLjA5NCAwIDE2IDBDNy40NzMgMCAwIDYuODY1IDAgMTZDMCAyMC4wOTQgMS41NjIgMjQuMTg4IDQuNjg4IDI3LjMxMkwxNzYgMTk4LjYyNVYyNTZDMTc2IDI2NC44NDQgMTgzLjE1NiAyNzIgMTkyIDI3MkgyNDkuMzc1TDMzNiAzNTguNjI1VjQxNkMzMzYgNDI0Ljg0NCAzNDMuMTU2IDQzMiAzNTIgNDMySDQwOS4zNzVMNDg0LjY4OCA1MDcuMzEyQzQ4Ny44MTIgNTEwLjQzOCA0OTEuOTA2IDUxMiA0OTYgNTEyQzUwNC41MjcgNTEyIDUxMiA1MDUuMTM1IDUxMiA0OTZDNTEyIDQ5MS45MDYgNTEwLjQzOCA0ODcuODEyIDUwNy4zMTIgNDg0LjY4OEw0MjcuMzEyIDQwNC42ODhaTTI0MCAzOC42MjVWOTZDMjQwIDEwNC44NDQgMjQ3LjE1NiAxMTIgMjU2IDExMkgzMTMuMzc1TDM2OCAxNjYuNjI1VjIyNEMzNjggMjMyLjg0NCAzNzUuMTU2IDI0MCAzODQgMjQwSDQ0MS4zNzVMNDg0LjY4OCAyODMuMzEyQzQ4Ny44MTIgMjg2LjQzOCA0OTEuOTA2IDI4OCA0OTYgMjg4QzUwNC41MjcgMjg4IDUxMiAyODEuMTM1IDUxMiAyNzJDNTEyIDI2Ny45MDYgNTEwLjQzOCAyNjMuODEyIDUwNy4zMTIgMjYwLjY4OEw0NTkuMzEyIDIxMi42ODhDNDU2LjMxMiAyMDkuNjg4IDQ1Mi4yNSAyMDggNDQ4IDIwOEg0MDBWMTYwQzQwMCAxNTUuNzUgMzk4LjMxMiAxNTEuNjg4IDM5NS4zMTIgMTQ4LjY4OEwzMzEuMzEyIDg0LjY4OEMzMjguMzEyIDgxLjY4OCAzMjQuMjUgODAgMzIwIDgwSDI3MlYzMkMyNzIgMjcuNzUgMjcwLjMxMiAyMy42ODggMjY3LjMxMiAyMC42ODhMMjUxLjMxMiA0LjY4OEMyNDguMTg4IDEuNTYyIDI0NC4wOTQgMCAyNDAgMEMyMzEuNDczIDAgMjI0IDYuODY1IDIyNCAxNkMyMjQgMjAuMDk0IDIyNS41NjIgMjQuMTg4IDIyOC42ODggMjcuMzEyTDI0MCAzOC42MjVaTTE3MS4zMTIgMzcyLjY4OEMxNjguMzEyIDM2OS42ODggMTY0LjI1IDM2OCAxNjAgMzY4SDExMlYzMjBDMTEyIDMxNS43NSAxMTAuMzEyIDMxMS42ODggMTA3LjMxMiAzMDguNjg4TDI3LjMxMiAyMjguNjg4QzI0LjE4OCAyMjUuNTYyIDIwLjA5NCAyMjQgMTYgMjI0QzcuNDczIDIyNCAwIDIzMC44NjUgMCAyNDBDMCAyNDQuMDk0IDEuNTYyIDI0OC4xODggNC42ODggMjUxLjMxMkw4MCAzMjYuNjI1VjM4NEM4MCAzOTIuODQ0IDg3LjE1NiA0MDAgOTYgNDAwSDE1My4zNzVMMjYwLjY4OCA1MDcuMzEyQzI2My44MTIgNTEwLjQzOCAyNjcuOTA2IDUxMiAyNzIgNTEyQzI4MC41MjcgNTEyIDI4OCA1MDUuMTM1IDI4OCA0OTZDMjg4IDQ5MS45MDYgMjg2LjQzOCA0ODcuODEyIDI4My4zMTIgNDg0LjY4OEwxNzEuMzEyIDM3Mi42ODhaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function ClawMarks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M427.312 404.688C424.312 401.688 420.25 400 416 400H368V352C368 347.75 366.312 343.688 363.312 340.688L267.312 244.688C264.312 241.688 260.25 240 256 240H208V192C208 187.75 206.312 183.688 203.312 180.688L27.312 4.688C24.188 1.562 20.094 0 16 0C7.473 0 0 6.865 0 16C0 20.094 1.562 24.188 4.688 27.312L176 198.625V256C176 264.844 183.156 272 192 272H249.375L336 358.625V416C336 424.844 343.156 432 352 432H409.375L484.688 507.312C487.812 510.438 491.906 512 496 512C504.527 512 512 505.135 512 496C512 491.906 510.438 487.812 507.312 484.688L427.312 404.688ZM240 38.625V96C240 104.844 247.156 112 256 112H313.375L368 166.625V224C368 232.844 375.156 240 384 240H441.375L484.688 283.312C487.812 286.438 491.906 288 496 288C504.527 288 512 281.135 512 272C512 267.906 510.438 263.812 507.312 260.688L459.312 212.688C456.312 209.688 452.25 208 448 208H400V160C400 155.75 398.312 151.688 395.312 148.688L331.312 84.688C328.312 81.688 324.25 80 320 80H272V32C272 27.75 270.312 23.688 267.312 20.688L251.312 4.688C248.188 1.562 244.094 0 240 0C231.473 0 224 6.865 224 16C224 20.094 225.562 24.188 228.688 27.312L240 38.625ZM171.312 372.688C168.312 369.688 164.25 368 160 368H112V320C112 315.75 110.312 311.688 107.312 308.688L27.312 228.688C24.188 225.562 20.094 224 16 224C7.473 224 0 230.865 0 240C0 244.094 1.562 248.188 4.688 251.312L80 326.625V384C80 392.844 87.156 400 96 400H153.375L260.688 507.312C263.812 510.438 267.906 512 272 512C280.527 512 288 505.135 288 496C288 491.906 286.438 487.812 283.312 484.688L171.312 372.688Z " />
        </Icon>
    </>
}