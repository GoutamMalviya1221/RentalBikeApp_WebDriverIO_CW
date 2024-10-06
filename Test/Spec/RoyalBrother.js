describe('RoyalBrother-RentalBike', () => {
    it.only('Test1', async () => {

        // Tap on Skip button :-
        await $('//android.widget.TextView[@text="SKIP"]').click();

        // Click on Banglore :-
        await $ ('//android.view.ViewGroup[@content-desc="BANGALORE"]/android.view.ViewGroup/android.widget.ImageView').click();

        //Scroll to Honda Activa 6G :-
        const sec = await $('//android.widget.TextView[@text="Honda Activa 6G"]');
        await driver.execute("mobile:scroll",{strategy:"accessibility id",selector:'Honda Activa 6G'});
        await sec.click();

        // Click on Search by Model :-
        await $('//android.widget.TextView[@text="Search by Model"]').click();

        // Click on Honda Activa 6G :-
        await $('//android.widget.TextView[@text="Honda Activa 6G"]').click();
        //await $('android = new UiSelector().text("Honda Activa 6G")').click();
        //await $('android = new UiSelector().className("android.view.ViewGroup").instance(11)').click();


        // Click on Menu icon :-
        await $('//android.view.View[@content-desc="MENU"]/com.horcrux.svg.SvgView/com.horcrux.svg.GroupView/com.horcrux.svg.GroupView/com.horcrux.svg.PathView').click();
                
        // Click on Cancellation Policy :-
        await $('//android.widget.TextView[@text="Cancellation Policy"]').click();
        await driver.pause(2000);
                

        // Assert the Title :-
        const title=await $('//android.widget.TextView[@text="CANCELLATION POLICY"]');
        console.log(await title.getText());
        await expect(title).toHaveText("CANCELLATION POLICY");

    });
   
});