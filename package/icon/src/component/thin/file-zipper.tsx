
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-zipper` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-zipper?s=thin file-zipper}
 * @preview ![file-zipper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDQgMTQ0SDE1MkMxNTYuNDIyIDE0NCAxNjAgMTQwLjQwNiAxNjAgMTM2UzE1Ni40MjIgMTI4IDE1MiAxMjhIMTA0Qzk5LjU3OCAxMjggOTYgMTMxLjU5MyA5NiAxMzZTOTkuNTc4IDE0NCAxMDQgMTQ0Wk0xMDQgODBIMTUyQzE1Ni40MjIgODAgMTYwIDc2LjQwNiAxNjAgNzJTMTU2LjQyMiA2NCAxNTIgNjRIMTA0Qzk5LjU3OCA2NCA5NiA2Ny41OTMgOTYgNzJTOTkuNTc4IDgwIDEwNCA4MFpNMTA0IDExMkgxNTJDMTU2LjQyMiAxMTIgMTYwIDEwOC40MDYgMTYwIDEwNFMxNTYuNDIyIDk2IDE1MiA5NkgxMDRDOTkuNTc4IDk2IDk2IDk5LjU5MyA5NiAxMDRTOTkuNTc4IDExMiAxMDQgMTEyWk0xMDQgNDhIMTUyQzE1Ni40MjIgNDggMTYwIDQ0LjQwNiAxNjAgNDBTMTU2LjQyMiAzMiAxNTIgMzJIMTA0Qzk5LjU3OCAzMiA5NiAzNS41OTMgOTYgNDBTOTkuNTc4IDQ4IDEwNCA0OFpNMzc0LjYyOSAxNTAuNjI1TDIzMy4zNzEgOS4zNzVDMjI3LjM3MSAzLjM3MSAyMTkuMjMgMCAyMTAuNzQ2IDBINjRDMjguNjUyIDAgMCAyOC42NTIgMCA2NFY0NDhDMCA0ODMuMzQzIDI4LjY1MiA1MTIgNjQgNTEySDMyMEMzNTUuMzQ4IDUxMiAzODQgNDgzLjM0MyAzODQgNDQ4VjE3My4yNTRDMzg0IDE2NC43NjUgMzgwLjYyOSAxNTYuNjI5IDM3NC42MjkgMTUwLjYyNVpNMjI0IDIyLjYyOUwzNjEuMzc1IDE2MEgyNDhDMjM0Ljc4MSAxNjAgMjI0IDE0OS4yMzQgMjI0IDEzNlYyMi42MjlaTTM2OCA0NDhDMzY4IDQ3NC40NjkgMzQ2LjQ2OSA0OTYgMzIwIDQ5Nkg2NEMzNy41MzEgNDk2IDE2IDQ3NC40NjkgMTYgNDQ4VjY0QzE2IDM3LjUzMSAzNy41MzEgMTYgNjQgMTZIMjA4VjEzNkMyMDggMTU4LjA2MiAyMjUuOTM4IDE3NiAyNDggMTc2SDM2OFY0NDhaTTEwNCAxNzZIMTUyQzE1Ni40MjIgMTc2IDE2MCAxNzIuNDA2IDE2MCAxNjhTMTU2LjQyMiAxNjAgMTUyIDE2MEgxMDRDOTkuNTc4IDE2MCA5NiAxNjMuNTkzIDk2IDE2OFM5OS41NzggMTc2IDEwNCAxNzZaTTEwNCAyMDhIMTUyQzE1Ni40MjIgMjA4IDE2MCAyMDQuNDA2IDE2MCAyMDBTMTU2LjQyMiAxOTIgMTUyIDE5MkgxMDRDOTkuNTc4IDE5MiA5NiAxOTUuNTkzIDk2IDIwMFM5OS41NzggMjA4IDEwNCAyMDhaTTE2My4xNTIgMjM1LjkwMkMxNjEuMjk1IDIyOC44ODYgMTU0Ljk0NSAyMjQgMTQ3LjY4NiAyMjRIMTA4LjM0NkMxMDEuMDcyIDIyNCA5NC43MTUgMjI4LjkwNiA5Mi44NjkgMjM1Ljk0MUw2NS40MzkgMzQwLjU0N0M1Ny41MSAzNzkuNTQ3IDg3LjcwMyA0MTYgMTI4LjI2OCA0MTZDMTY4LjUyNSA0MTYgMTk4LjcyMSAzNzkuNjk5IDE5MC45NDMgMzQwLjg1MUwxNjMuMTUyIDIzNS45MDJaTTE2NS41NzQgMzgyLjQ1M0MxNTYuNDM0IDM5My42MDUgMTQyLjgzNiA0MDAgMTI4LjI2OCA0MDBDMTEzLjU2NCA0MDAgOTkuODc3IDM5My41NyA5MC43MTcgMzgyLjM1OUM4MS44MzYgMzcxLjQ5MiA3OC4zMzggMzU3LjQxNCA4MC45MTYgMzQ0LjYwNUwxMDguMzQ2IDI0MEgxNDcuNjg2TDE3NS4yNTYgMzQzLjk5MkMxNzcuOTggMzU3LjYwNSAxNzQuNDUxIDM3MS42MjEgMTY1LjU3NCAzODIuNDUzWk0xNDQgMzQ0SDExMkMxMDcuNTc4IDM0NCAxMDQgMzQ3LjU5NCAxMDQgMzUyUzEwNy41NzggMzYwIDExMiAzNjBIMTQ0QzE0OC40MjIgMzYwIDE1MiAzNTYuNDA2IDE1MiAzNTJTMTQ4LjQyMiAzNDQgMTQ0IDM0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileZipper(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M104 144H152C156.422 144 160 140.406 160 136S156.422 128 152 128H104C99.578 128 96 131.593 96 136S99.578 144 104 144ZM104 80H152C156.422 80 160 76.406 160 72S156.422 64 152 64H104C99.578 64 96 67.593 96 72S99.578 80 104 80ZM104 112H152C156.422 112 160 108.406 160 104S156.422 96 152 96H104C99.578 96 96 99.593 96 104S99.578 112 104 112ZM104 48H152C156.422 48 160 44.406 160 40S156.422 32 152 32H104C99.578 32 96 35.593 96 40S99.578 48 104 48ZM374.629 150.625L233.371 9.375C227.371 3.371 219.23 0 210.746 0H64C28.652 0 0 28.652 0 64V448C0 483.343 28.652 512 64 512H320C355.348 512 384 483.343 384 448V173.254C384 164.765 380.629 156.629 374.629 150.625ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629ZM368 448C368 474.469 346.469 496 320 496H64C37.531 496 16 474.469 16 448V64C16 37.531 37.531 16 64 16H208V136C208 158.062 225.938 176 248 176H368V448ZM104 176H152C156.422 176 160 172.406 160 168S156.422 160 152 160H104C99.578 160 96 163.593 96 168S99.578 176 104 176ZM104 208H152C156.422 208 160 204.406 160 200S156.422 192 152 192H104C99.578 192 96 195.593 96 200S99.578 208 104 208ZM163.152 235.902C161.295 228.886 154.945 224 147.686 224H108.346C101.072 224 94.715 228.906 92.869 235.941L65.439 340.547C57.51 379.547 87.703 416 128.268 416C168.525 416 198.721 379.699 190.943 340.851L163.152 235.902ZM165.574 382.453C156.434 393.605 142.836 400 128.268 400C113.564 400 99.877 393.57 90.717 382.359C81.836 371.492 78.338 357.414 80.916 344.605L108.346 240H147.686L175.256 343.992C177.98 357.605 174.451 371.621 165.574 382.453ZM144 344H112C107.578 344 104 347.594 104 352S107.578 360 112 360H144C148.422 360 152 356.406 152 352S148.422 344 144 344Z" />
        </Icon>
    </>
}