import { MatPaginatorIntl } from '@angular/material';

export class MyPaginatorIntl extends MatPaginatorIntl {
    constructor() {
        super();
        this.itemsPerPageLabel = '每页';
        this.firstPageLabel = '首页';
        this.lastPageLabel = '末页';
        this.previousPageLabel = '上一页';
        this.nextPageLabel = '下一页';
        this.getRangeLabel = this.getRangeLabelPrivate;
    }

    private getRangeLabelPrivate(page: number, pageSize: number, length: number): string {
        if (length === 0 || pageSize === 0) {
            return `共0条记录`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `第${startIndex + 1} - ${endIndex}, 共${length}条记录`;
    }
}
