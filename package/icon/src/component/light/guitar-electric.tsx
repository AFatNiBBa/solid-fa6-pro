
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `guitar-electric` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guitar-electric?s=light guitar-electric}
 * @preview ![guitar-electric](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzEuMzEyIDI3Ni42ODhDMTY1LjA2MiAyNzAuNDM4IDE1NC45MzcgMjcwLjQzOCAxNDguNjg3IDI3Ni42ODhTMTQyLjQzNyAyOTMuMDYzIDE0OC42ODcgMjk5LjMxMkwyMTIuNjg3IDM2My4zMTJDMjE1LjgxMiAzNjYuNDM4IDIxOS45MDYgMzY4IDIyNCAzNjhTMjMyLjE4NyAzNjYuNDM4IDIzNS4zMTIgMzYzLjMxMkMyNDEuNTYyIDM1Ny4wNjIgMjQxLjU2MiAzNDYuOTM3IDIzNS4zMTIgMzQwLjY4OEwxNzEuMzEyIDI3Ni42ODhaTTEyMy4zMTIgMzI0LjY4OEMxMTcuMDYyIDMxOC40MzggMTA2LjkzNyAzMTguNDM4IDEwMC42ODcgMzI0LjY4OFM5NC40MzcgMzQxLjA2MyAxMDAuNjg3IDM0Ny4zMTJMMTY0LjY4NyA0MTEuMzEyQzE2Ny44MTIgNDE0LjQzOCAxNzEuOTA2IDQxNiAxNzYgNDE2UzE4NC4xODcgNDE0LjQzOCAxODcuMzEyIDQxMS4zMTJDMTkzLjU2MiA0MDUuMDYyIDE5My41NjIgMzk0LjkzNyAxODcuMzEyIDM4OC42ODhMMTIzLjMxMiAzMjQuNjg4Wk00OTcuOTU1IDE3LjcxMUM0ODYuNTM1IDYuMjg5IDQ3MS4zNjMgMCA0NTUuMjM2IDBDNDQ1LjkzMiAwIDQzNi42IDIuMjAzIDQyOC4yNDYgNi4zNzNMMzg0LjAyNSAyOC40OThDMzY3LjY2OCAzNi42OCAzNTcuNTA2IDUzLjEzOSAzNTcuNTA2IDcxLjQ1M1YxMzUuNDQ1TDI3NC4zODUgMjE1LjQ4MkwyNjguNzU0IDIwOS43NDZDMjY1Ljg3OSAyMDYuMTIxIDI2NS4xMjkgMjAxLjEyMSAyNjcuMDA0IDE5Ni44NzFMMjgyLjg3OSAxNjIuNzQ2QzI5MS4zNzkgMTQ0LjYyMSAyODUuNjI5IDEyMi45OTYgMjY5LjEyOSAxMTEuNDk2QzI1Mi43NTQgOTkuOTk2IDIzMC4zNzkgMTAxLjg3MSAyMTYuMjU0IDExNi4xMjFMMTgxLjAwNCAxNTEuMzcxQzE3MS4wMDQgMTYxLjM3MSAxNjMuMzc5IDE3My40OTYgMTU4LjYyOSAxODYuNzQ2QzE1NC4yNTQgMTk4Ljc0NiAxNDUuMzc5IDIwOC40OTYgMTMzLjg3OSAyMTMuODcxTDYzLjUwNCAyNDYuNDk2QzMyLjUwNCAyNTguODcxIDkuMTI5IDI4Ni44NzEgMi4xMjkgMzIwLjg3MUMtNC44NzEgMzU0Ljc0NiA1LjYyOSAzODkuODcxIDMwLjEyOSA0MTQuMzcxTDk3LjYyOSA0ODEuODcxQzEyMi4xMjkgNTA2LjM3MSAxNTcuMjU0IDUxNi44NzEgMTkxLjEyOSA1MDkuODcxQzIyNS4wMDQgNTAyLjk5NiAyNTMuMTI5IDQ3OS4zNzEgMjY2LjAwNCA0NDcuMjQ2TDI5OC4wMDQgMzc4LjEyMUMzMDMuMzc5IDM2Ni42MjEgMzEzLjI1NCAzNTcuNzQ2IDMyNS4xMjkgMzUzLjM3MUMzMzguNTA0IDM0OC42MjEgMzUwLjYyOSAzNDAuOTk2IDM2MC42MjkgMzMwLjk5NkwzODAuNTA0IDMxMS4xMjFDMzk3LjAwNCAyOTQuNjIxIDM5Ny4wMDQgMjY3Ljg3MSAzODAuNTA0IDI1MS4zNzFDMzcyLjc1NCAyNDMuMzcxIDM2Mi4wMDQgMjM4Ljg3MSAzNTEuMDA0IDIzOC45OTZDMzQ2LjUwNCAyMzguOTk2IDM0Mi4wMDQgMjM5LjYyMSAzMzcuNzU0IDI0MC45OTZMMzE1Ljg3OSAyNDcuOTk2QzMxNC42MjkgMjQ4LjM3MSAzMTMuMjU0IDI0OC42MjEgMzExLjg3OSAyNDguNjIxQzMwNy4xMjkgMjQ4LjYyMSAzMDQuMDA0IDI0NS43NDYgMzAyLjM3OSAyNDMuOTk2TDI5Ni43MTkgMjM4LjIzTDQ0My4yNjYgOTQuOTNDNDQ5LjcwNyA5OC4wMiA0NTYuNzc3IDk5LjYzMSA0NjQuMDMxIDk5LjYzMUM0NzYuODU3IDk5LjYzMSA0ODguOTA0IDk0LjY0NiA0OTcuOTU3IDg1LjU5NEM1MDcuMDEyIDc2LjUzNyA1MTIgNjQuNDgyIDUxMiA1MS42NTJDNTEyIDM4LjgyIDUwNy4wMTIgMjYuNzY4IDQ5Ny45NTUgMTcuNzExWk0zMTEuODc5IDI4MC40OTZWMjgwLjYyMUMzMTYuNjI5IDI4MC40OTYgMzIxLjI1NCAyNzkuODcxIDMyNS42MjkgMjc4LjM3MUwzNDcuNTA0IDI3MS40OTZDMzQ4LjYyOSAyNzEuMTIxIDM0OS43NTQgMjcwLjk5NiAzNTEuMDA0IDI3MC45OTZDMzUzLjYyOSAyNzAuODcxIDM1Ni4xMjkgMjcxLjk5NiAzNTcuODc5IDI3My45OTZDMzU5Ljc1NCAyNzUuODcxIDM2MC44NzkgMjc4LjQ5NiAzNjAuODc5IDI4MS4yNDZTMzU5Ljc1NCAyODYuNjIxIDM1Ny44NzkgMjg4LjQ5NkwzMzguMDA0IDMwOC4zNzFDMzMxLjM3OSAzMTQuOTk2IDMyMy4yNTQgMzIwLjEyMSAzMTQuMzc5IDMyMy4yNDZDMjk0LjM3OSAzMzAuMzcxIDI3OC4wMDQgMzQ1LjM3MSAyNjkuMDA0IDM2NC42MjFMMjM3LjAwNCA0MzMuODcxTDIzNi42MjkgNDM0LjYyMUwyMzYuMzc5IDQzNS4zNzFDMjI3LjUwNCA0NTcuNDk2IDIwOC4xMjkgNDczLjc0NiAxODQuNzU0IDQ3OC40OTZDMTYxLjM3OSA0ODMuMzcxIDEzNy4xMjkgNDc2LjEyMSAxMjAuMzc5IDQ1OS4yNDZMNTIuNzU0IDM5MS43NDZDMzUuODc5IDM3NC44NzEgMjguNjI5IDM1MC42MjEgMzMuNTA0IDMyNy4yNDZDMzguMjU0IDMwNC4yNDYgNTQuMjU0IDI4NC42MjEgNzUuMzc5IDI3Ni4yNDZMNzYuMjU0IDI3NS44NzFMNzcuMDA0IDI3NS40OTZMMTQ3LjI1NCAyNDIuOTk2QzE2Ni42MjkgMjMzLjk5NiAxODEuNTA0IDIxNy42MjEgMTg4Ljc1NCAxOTcuNjIxQzE5MS44NzkgMTg4Ljc0NiAxOTcuMDA0IDE4MC42MjEgMjAzLjYyOSAxNzMuOTk2TDIzOC44NzkgMTM4Ljc0NkMyNDAuNjI5IDEzNi45OTYgMjQzLjAwNCAxMzUuOTk2IDI0NS41MDQgMTM1Ljk5NlMyNTAuMzc5IDEzNi45OTYgMjUyLjEyOSAxMzguNzQ2QzI1NC43NTQgMTQxLjQ5NiAyNTUuNTA0IDE0NS43NDYgMjUzLjg3OSAxNDkuMjQ2TDIzOC4wMDQgMTgzLjM3MUMyMzEuMTI5IDE5OC4zNzEgMjMzLjEyOSAyMTUuODcxIDI0My4xMjkgMjI4Ljg3MUwyNzkuNzU0IDI2Ni42MjFDMjkxLjI1NCAyNzguMTIxIDMwMy42MjkgMjgwLjQ5NiAzMTEuODc5IDI4MC40OTZaTTQ3NS4zMjggNjIuOTcxQzQ3Mi4zMiA2NS45NzcgNDY4LjMwMyA2Ny42MzMgNDY0LjAxNiA2Ny42MzNTNDU1LjcxMSA2NS45NzcgNDUyLjcwMSA2Mi45NjdDNDQ5LjY4NiA1OS45NTEgNDQ1LjY2OCA1OC4yODcgNDQxLjM4OSA1OC4yODdDNDM3LjExMSA1OC4yODcgNDMzLjA5MiA1OS45NDkgNDMwLjA3NCA2Mi45NjlMMzg5LjUwNCAxMDMuNTM1VjcxLjQ1M0MzODkuNTA0IDY1LjMyOCAzOTIuODg1IDU5Ljg0MiAzOTguMzI2IDU3LjEzNUw0NDIuNTU5IDM1LjAwNkM0NDYuNDg0IDMzLjA0NyA0NTAuODc3IDMyLjAwOCA0NTUuMjUgMzIuMDA4QzQ2Mi44MjggMzIuMDA4IDQ2OS45NTkgMzQuOTY1IDQ3NS4zMyA0MC4zMzZDNDgxLjU2NiA0Ni41NzQgNDgxLjU2NiA1Ni43MjkgNDc1LjMyOCA2Mi45NzFaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GuitarElectric(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M171.312 276.688C165.062 270.438 154.937 270.438 148.687 276.688S142.437 293.063 148.687 299.312L212.687 363.312C215.812 366.438 219.906 368 224 368S232.187 366.438 235.312 363.312C241.562 357.062 241.562 346.937 235.312 340.688L171.312 276.688ZM123.312 324.688C117.062 318.438 106.937 318.438 100.687 324.688S94.437 341.063 100.687 347.312L164.687 411.312C167.812 414.438 171.906 416 176 416S184.187 414.438 187.312 411.312C193.562 405.062 193.562 394.937 187.312 388.688L123.312 324.688ZM497.955 17.711C486.535 6.289 471.363 0 455.236 0C445.932 0 436.6 2.203 428.246 6.373L384.025 28.498C367.668 36.68 357.506 53.139 357.506 71.453V135.445L274.385 215.482L268.754 209.746C265.879 206.121 265.129 201.121 267.004 196.871L282.879 162.746C291.379 144.621 285.629 122.996 269.129 111.496C252.754 99.996 230.379 101.871 216.254 116.121L181.004 151.371C171.004 161.371 163.379 173.496 158.629 186.746C154.254 198.746 145.379 208.496 133.879 213.871L63.504 246.496C32.504 258.871 9.129 286.871 2.129 320.871C-4.871 354.746 5.629 389.871 30.129 414.371L97.629 481.871C122.129 506.371 157.254 516.871 191.129 509.871C225.004 502.996 253.129 479.371 266.004 447.246L298.004 378.121C303.379 366.621 313.254 357.746 325.129 353.371C338.504 348.621 350.629 340.996 360.629 330.996L380.504 311.121C397.004 294.621 397.004 267.871 380.504 251.371C372.754 243.371 362.004 238.871 351.004 238.996C346.504 238.996 342.004 239.621 337.754 240.996L315.879 247.996C314.629 248.371 313.254 248.621 311.879 248.621C307.129 248.621 304.004 245.746 302.379 243.996L296.719 238.23L443.266 94.93C449.707 98.02 456.777 99.631 464.031 99.631C476.857 99.631 488.904 94.646 497.957 85.594C507.012 76.537 512 64.482 512 51.652C512 38.82 507.012 26.768 497.955 17.711ZM311.879 280.496V280.621C316.629 280.496 321.254 279.871 325.629 278.371L347.504 271.496C348.629 271.121 349.754 270.996 351.004 270.996C353.629 270.871 356.129 271.996 357.879 273.996C359.754 275.871 360.879 278.496 360.879 281.246S359.754 286.621 357.879 288.496L338.004 308.371C331.379 314.996 323.254 320.121 314.379 323.246C294.379 330.371 278.004 345.371 269.004 364.621L237.004 433.871L236.629 434.621L236.379 435.371C227.504 457.496 208.129 473.746 184.754 478.496C161.379 483.371 137.129 476.121 120.379 459.246L52.754 391.746C35.879 374.871 28.629 350.621 33.504 327.246C38.254 304.246 54.254 284.621 75.379 276.246L76.254 275.871L77.004 275.496L147.254 242.996C166.629 233.996 181.504 217.621 188.754 197.621C191.879 188.746 197.004 180.621 203.629 173.996L238.879 138.746C240.629 136.996 243.004 135.996 245.504 135.996S250.379 136.996 252.129 138.746C254.754 141.496 255.504 145.746 253.879 149.246L238.004 183.371C231.129 198.371 233.129 215.871 243.129 228.871L279.754 266.621C291.254 278.121 303.629 280.496 311.879 280.496ZM475.328 62.971C472.32 65.977 468.303 67.633 464.016 67.633S455.711 65.977 452.701 62.967C449.686 59.951 445.668 58.287 441.389 58.287C437.111 58.287 433.092 59.949 430.074 62.969L389.504 103.535V71.453C389.504 65.328 392.885 59.842 398.326 57.135L442.559 35.006C446.484 33.047 450.877 32.008 455.25 32.008C462.828 32.008 469.959 34.965 475.33 40.336C481.566 46.574 481.566 56.729 475.328 62.971Z" />
        </Icon>
    </>
}