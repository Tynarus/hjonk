import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernSoftwareComponent } from './modern-software.component';

describe('ModernSoftwareComponent', () => {
    let component: ModernSoftwareComponent;
    let fixture: ComponentFixture<ModernSoftwareComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModernSoftwareComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModernSoftwareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
