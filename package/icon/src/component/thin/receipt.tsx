
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `receipt` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=thin receipt}
 * @preview ![receipt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAuMDIgMEMzOTYuNzQ2IDAgMzkzLjM4NyAxLjAyMSAzOTAuMzc1IDMuMjg5TDM1MiA0OC4wMzFMMjk3LjYyNSAzLjI4OUMyOTQuNzUgMS4xMDIgMjkxLjM3NSAwLjAwOCAyODggMC4wMDhTMjgxLjI1IDEuMTAyIDI3OC4zNzUgMy4yODlMMjI0IDQ4LjAzMUwxNjkuNjI1IDMuMjg5QzE2Ni43NSAxLjEwMiAxNjMuMzc1IDAuMDA4IDE2MCAwLjAwOFMxNTMuMjUgMS4xMDIgMTUwLjM3NSAzLjI4OUw5NiA0OC4wMzFMNTcuNjI1IDMuMjg5QzU0LjYxNSAxLjAyMyA1MS4yNTQgMCA0Ny45ODIgMEMzOS43MDUgMCAzMiA2LjU0MSAzMiAxNi4wMzdWNDk1Ljk2M0MzMiA1MDUuNDU3IDM5LjcwNSA1MTIgNDcuOTgyIDUxMkM1MS4yNTQgNTEyIDU0LjYxNSA1MTAuOTc5IDU3LjYyNSA1MDguNzExTDk2IDQ2My45NjlMMTUwLjM3NSA1MDguNzExQzE1My4yNSA1MTAuODk4IDE1Ni42MjUgNTExLjk5MiAxNjAgNTExLjk5MlMxNjYuNzUgNTEwLjg5OCAxNjkuNjI1IDUwOC43MTFMMjI0IDQ2My45NjlMMjc4LjM3NSA1MDguNzExQzI4MS4yNSA1MTAuODk4IDI4NC42MjUgNTExLjk5MiAyODggNTExLjk5MlMyOTQuNzUgNTEwLjg5OCAyOTcuNjI1IDUwOC43MTFMMzUyIDQ2My45NjlMMzkwLjM3NSA1MDguNzExQzM5My4zNSA1MTAuOTc3IDM5Ni42OTcgNTEyIDM5OS45NjUgNTEyQzQwOC4yMzIgNTEyIDQxNiA1MDUuNDU5IDQxNiA0OTUuOTYzVjE2LjAzN0M0MTYgNi41NDMgNDA4LjI5NSAwIDQwMC4wMiAwWk0zNjQuMTQ1IDQ1My41NTNDMzYwLjk4NCA0NDkuODY3IDM1Ni41MDQgNDQ3Ljk2OSAzNTEuOTkyIDQ0Ny45NjlDMzQ4LjQxMiA0NDcuOTY5IDM0NC44MTEgNDQ5LjE2NiAzNDEuODM0IDQ1MS42MTNMMjg4LjU0MSA0OTYuMzU1TDIzNC4xNjYgNDUxLjYxM0MyMzEuMjEzIDQ0OS4xODQgMjI3LjYwNyA0NDcuOTY5IDIyNCA0NDcuOTY5QzIyMC4zOTUgNDQ3Ljk2OSAyMTYuNzg3IDQ0OS4xODQgMjEzLjgzNCA0NTEuNjEzTDE2MC41NDEgNDk2LjM1NUwxMDYuMTY2IDQ1MS42MTNDMTAzLjE5MSA0NDkuMTY0IDk5LjU5IDQ0Ny45NjkgOTYuMDA4IDQ0Ny45NjlDOTEuNDk2IDQ0Ny45NjkgODcuMDE2IDQ0OS44NjcgODMuODU1IDQ1My41NTNMNDggNDk1LjM1NVYxNi42NDVMODMuODU1IDU4LjQ0N0M4Ny4wMTYgNjIuMTMzIDkxLjQ5NiA2NC4wMzEgOTYuMDA4IDY0LjAzMUM5OS41OSA2NC4wMzEgMTAzLjE5MSA2Mi44MzQgMTA2LjE2NiA2MC4zODdMMTU5LjQ1OSAxNS42NDVMMjEzLjgzNCA2MC4zODdDMjE2Ljc4NyA2Mi44MTYgMjIwLjM5NSA2NC4wMzEgMjI0IDY0LjAzMUMyMjcuNjA3IDY0LjAzMSAyMzEuMjEzIDYyLjgxNiAyMzQuMTY2IDYwLjM4N0wyODcuNDU5IDE1LjY0NUwzNDEuODM0IDYwLjM4N0MzNDQuODExIDYyLjgzNiAzNDguNDEgNjQuMDMxIDM1MS45OTIgNjQuMDMxQzM1Ni41MDQgNjQuMDMxIDM2MC45ODQgNjIuMTMzIDM2NC4xNDUgNTguNDQ3TDQwMCAxNi42NDVMNDAwLjA3MiA0OTUuNDQxTDM2NC4xNDUgNDUzLjU1M1pNMzQ0IDE1MkgxMDRDOTkuNTc4IDE1MiA5NiAxNTUuNTc4IDk2IDE2MFM5OS41NzggMTY4IDEwNCAxNjhIMzQ0QzM0OC40MjIgMTY4IDM1MiAxNjQuNDIyIDM1MiAxNjBTMzQ4LjQyMiAxNTIgMzQ0IDE1MlpNMzQ0IDI0OEgxMDRDOTkuNTc4IDI0OCA5NiAyNTEuNTc4IDk2IDI1NlM5OS41NzggMjY0IDEwNCAyNjRIMzQ0QzM0OC40MjIgMjY0IDM1MiAyNjAuNDIyIDM1MiAyNTZTMzQ4LjQyMiAyNDggMzQ0IDI0OFpNMzQ0IDM0NEgxMDRDOTkuNTc4IDM0NCA5NiAzNDcuNTk0IDk2IDM1MlM5OS41NzggMzYwIDEwNCAzNjBIMzQ0QzM0OC40MjIgMzYwIDM1MiAzNTYuNDA2IDM1MiAzNTJTMzQ4LjQyMiAzNDQgMzQ0IDM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Receipt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400.02 0C396.746 0 393.387 1.021 390.375 3.289L352 48.031L297.625 3.289C294.75 1.102 291.375 0.008 288 0.008S281.25 1.102 278.375 3.289L224 48.031L169.625 3.289C166.75 1.102 163.375 0.008 160 0.008S153.25 1.102 150.375 3.289L96 48.031L57.625 3.289C54.615 1.023 51.254 0 47.982 0C39.705 0 32 6.541 32 16.037V495.963C32 505.457 39.705 512 47.982 512C51.254 512 54.615 510.979 57.625 508.711L96 463.969L150.375 508.711C153.25 510.898 156.625 511.992 160 511.992S166.75 510.898 169.625 508.711L224 463.969L278.375 508.711C281.25 510.898 284.625 511.992 288 511.992S294.75 510.898 297.625 508.711L352 463.969L390.375 508.711C393.35 510.977 396.697 512 399.965 512C408.232 512 416 505.459 416 495.963V16.037C416 6.543 408.295 0 400.02 0ZM364.145 453.553C360.984 449.867 356.504 447.969 351.992 447.969C348.412 447.969 344.811 449.166 341.834 451.613L288.541 496.355L234.166 451.613C231.213 449.184 227.607 447.969 224 447.969C220.395 447.969 216.787 449.184 213.834 451.613L160.541 496.355L106.166 451.613C103.191 449.164 99.59 447.969 96.008 447.969C91.496 447.969 87.016 449.867 83.855 453.553L48 495.355V16.645L83.855 58.447C87.016 62.133 91.496 64.031 96.008 64.031C99.59 64.031 103.191 62.834 106.166 60.387L159.459 15.645L213.834 60.387C216.787 62.816 220.395 64.031 224 64.031C227.607 64.031 231.213 62.816 234.166 60.387L287.459 15.645L341.834 60.387C344.811 62.836 348.41 64.031 351.992 64.031C356.504 64.031 360.984 62.133 364.145 58.447L400 16.645L400.072 495.441L364.145 453.553ZM344 152H104C99.578 152 96 155.578 96 160S99.578 168 104 168H344C348.422 168 352 164.422 352 160S348.422 152 344 152ZM344 248H104C99.578 248 96 251.578 96 256S99.578 264 104 264H344C348.422 264 352 260.422 352 256S348.422 248 344 248ZM344 344H104C99.578 344 96 347.594 96 352S99.578 360 104 360H344C348.422 360 352 356.406 352 352S348.422 344 344 344Z" />
        </Icon>
    </>
}