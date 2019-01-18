import { CKEditorComponent } from 'ckeditor4-angular/ckeditor.component';

export class TestTools {
	static whenEvent( evtName: string, component: CKEditorComponent ) {
		return new Promise( res => {
			component[ evtName ].subscribe( res );
		} );
	}
}
