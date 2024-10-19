
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `puzzle-piece` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/puzzle-piece?s=regular puzzle-piece}
 * @preview ![puzzle-piece](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjUgMTgyQzQyMS45NzMgMTgyIDQxOC45NjkgMTgyLjE3NiA0MTYgMTgyLjUyVjE3MEM0MTYgMTI2LjM5MSAzNzIuNzg1IDk2IDMzNCA5NkgzMjkuNDhDMzI5LjgyNiA5My4wMzEgMzMwIDkwLjAyNyAzMzAgODdDMzMwIDM4LjIxNSAyODYuMDc2IDAgMjMwIDBDMTczLjkyNiAwIDEzMCAzOC4yMTUgMTMwIDg3QzEzMCA5MC4wMjcgMTMwLjE3NiA5My4wMzEgMTMwLjUyMSA5Nkg3NEMzMy4xOTcgOTYgMCAxMjkuMTk1IDAgMTcwVjIzNi4yMDdDMCAyNTMuODQ0IDYuNzcgMjY5LjkyOCAxNy44NDYgMjgyQzYuNzcgMjk0LjA3IDAgMzEwLjE1NCAwIDMyNy43OTFWNDM4QzAgNDc4LjgwNSAzMy4xOTcgNTEyIDc0IDUxMkgxODQuMjA5QzIwMS44NDQgNTEyIDIxNy45MyA1MDUuMjMgMjMwIDQ5NC4xNTRDMjQyLjA3MiA1MDUuMjMgMjU4LjE1NiA1MTIgMjc1Ljc5MyA1MTJIMzM0QzM3Mi43ODUgNTEyIDQxNiA0ODEuNjA5IDQxNiA0MzhWMzgxLjQ4QzQxOC45NjkgMzgxLjgyNCA0MjEuOTczIDM4MiA0MjUgMzgyQzQ3My43ODUgMzgyIDUxMiAzMzguMDc0IDUxMiAyODJTNDczLjc4NSAxODIgNDI1IDE4MlpNNDI1IDMzNEM0MTMuNzIzIDMzNCA0MDMuNjQ4IDMyNy41NDUgMzk2LjU2NiAzMTcuMzExQzM5Mi42ODQgMzExLjcwMSAzODYuNjE1IDMwOCAzNzkuNzkzIDMwOEMzNjguODYxIDMwOCAzNjggMzE2Ljg1OSAzNjggMzI3Ljc5MVY0MzhDMzY4IDQ1Mi4zNTkgMzQ4LjM1OSA0NjQgMzM0IDQ2NEgyNzUuNzkzQzI2NC44NjEgNDY0IDI1NiA0NTUuMTM5IDI1NiA0NDQuMjA3QzI1NiA0MzcuMzg1IDI1OS43MDEgNDMxLjMxOCAyNjUuMzExIDQyNy40MzRDMjc1LjU0NyA0MjAuMzUgMjgyIDQxMC4yNzcgMjgyIDM5OUMyODIgMzc3LjQ2MSAyNTguNzE5IDM2MCAyMzAgMzYwQzIwMS4yODEgMzYwIDE3OCAzNzcuNDYxIDE3OCAzOTlDMTc4IDQxMC4yNzcgMTg0LjQ1NSA0MjAuMzUgMTk0LjY4OSA0MjcuNDM0QzIwMC4yOTkgNDMxLjMxOCAyMDQgNDM3LjM4NSAyMDQgNDQ0LjIwN0MyMDQgNDU1LjEzOSAxOTUuMTM5IDQ2NCAxODQuMjA5IDQ2NEg3NEM1OS42NDEgNDY0IDQ4IDQ1Mi4zNTkgNDggNDM4VjMyNy43OTFDNDggMzE2Ljg1OSA1Ni44NjEgMzA4IDY3Ljc5MyAzMDhDNzQuNjE1IDMwOCA4MC42ODQgMzExLjcwMSA4NC41NjYgMzE3LjMxMUM5MS42NDggMzI3LjU0NSAxMDEuNzIzIDMzNCAxMTMgMzM0QzEzNC41MzkgMzM0IDE1MiAzMTAuNzE5IDE1MiAyODJTMTM0LjUzOSAyMzAgMTEzIDIzMEMxMDEuNzIzIDIzMCA5MS42NDggMjM2LjQ1MyA4NC41NjYgMjQ2LjY4OEM4MC42ODQgMjUyLjI5OSA3NC42MTUgMjU2IDY3Ljc5MyAyNTZDNTYuODYxIDI1NiA0OCAyNDcuMTM5IDQ4IDIzNi4yMDdWMTcwQzQ4IDE1NS42NDEgNTkuNjQxIDE0NCA3NCAxNDRIMTg0LjIwOUMxOTUuMTM5IDE0NCAyMDQgMTQzLjEzOSAyMDQgMTMyLjIwN0MyMDQgMTI1LjM4NSAyMDAuMjk5IDExOS4zMTggMTk0LjY4OSAxMTUuNDM0QzE4NC40NTUgMTA4LjM1IDE3OCA5OC4yNzcgMTc4IDg3QzE3OCA2NS40NjEgMjAxLjI4MSA0OCAyMzAgNDhDMjU4LjcxOSA0OCAyODIgNjUuNDYxIDI4MiA4N0MyODIgOTguMjc3IDI3NS41NDcgMTA4LjM1IDI2NS4zMTEgMTE1LjQzNEMyNTkuNzAxIDExOS4zMTggMjU2IDEyNS4zODUgMjU2IDEzMi4yMDdDMjU2IDE0My4xMzkgMjY0Ljg2MSAxNDQgMjc1Ljc5MyAxNDRIMzM0QzM0OC4zNTkgMTQ0IDM2OCAxNTUuNjQxIDM2OCAxNzBWMjM2LjIwN0MzNjggMjQ3LjEzOSAzNjguODYxIDI1NiAzNzkuNzkzIDI1NkMzODYuNjE1IDI1NiAzOTIuNjg0IDI1Mi4yOTkgMzk2LjU2NiAyNDYuNjg4QzQwMy42NDggMjM2LjQ1MyA0MTMuNzIzIDIzMCA0MjUgMjMwQzQ0Ni41MzkgMjMwIDQ2NCAyNTMuMjgxIDQ2NCAyODJTNDQ2LjUzOSAzMzQgNDI1IDMzNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PuzzlePiece(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M425 182C421.973 182 418.969 182.176 416 182.52V170C416 126.391 372.785 96 334 96H329.48C329.826 93.031 330 90.027 330 87C330 38.215 286.076 0 230 0C173.926 0 130 38.215 130 87C130 90.027 130.176 93.031 130.521 96H74C33.197 96 0 129.195 0 170V236.207C0 253.844 6.77 269.928 17.846 282C6.77 294.07 0 310.154 0 327.791V438C0 478.805 33.197 512 74 512H184.209C201.844 512 217.93 505.23 230 494.154C242.072 505.23 258.156 512 275.793 512H334C372.785 512 416 481.609 416 438V381.48C418.969 381.824 421.973 382 425 382C473.785 382 512 338.074 512 282S473.785 182 425 182ZM425 334C413.723 334 403.648 327.545 396.566 317.311C392.684 311.701 386.615 308 379.793 308C368.861 308 368 316.859 368 327.791V438C368 452.359 348.359 464 334 464H275.793C264.861 464 256 455.139 256 444.207C256 437.385 259.701 431.318 265.311 427.434C275.547 420.35 282 410.277 282 399C282 377.461 258.719 360 230 360C201.281 360 178 377.461 178 399C178 410.277 184.455 420.35 194.689 427.434C200.299 431.318 204 437.385 204 444.207C204 455.139 195.139 464 184.209 464H74C59.641 464 48 452.359 48 438V327.791C48 316.859 56.861 308 67.793 308C74.615 308 80.684 311.701 84.566 317.311C91.648 327.545 101.723 334 113 334C134.539 334 152 310.719 152 282S134.539 230 113 230C101.723 230 91.648 236.453 84.566 246.688C80.684 252.299 74.615 256 67.793 256C56.861 256 48 247.139 48 236.207V170C48 155.641 59.641 144 74 144H184.209C195.139 144 204 143.139 204 132.207C204 125.385 200.299 119.318 194.689 115.434C184.455 108.35 178 98.277 178 87C178 65.461 201.281 48 230 48C258.719 48 282 65.461 282 87C282 98.277 275.547 108.35 265.311 115.434C259.701 119.318 256 125.385 256 132.207C256 143.139 264.861 144 275.793 144H334C348.359 144 368 155.641 368 170V236.207C368 247.139 368.861 256 379.793 256C386.615 256 392.684 252.299 396.566 246.688C403.648 236.453 413.723 230 425 230C446.539 230 464 253.281 464 282S446.539 334 425 334Z" />
        </Icon>
    </>
}