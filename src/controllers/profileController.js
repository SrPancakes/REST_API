const Profile = require('../models/profileModel');

exports.getProfiles = async (req, res) => {
    try {
        const { userId } = req.params;
        const profiles = await Profile.findAll({ where: { user_id: userId } });
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profiles', error });
    }
};

exports.createProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const { profile_name, avatar_url } = req.body;

        const profile = await Profile.create({ user_id: userId, profile_name, avatar_url });
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error creating profile', error });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { profileId } = req.params;
        const { profile_name, avatar_url } = req.body;

        const profile = await Profile.findByPk(profileId);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        profile.profile_name = profile_name || profile.profile_name;
        profile.avatar_url = avatar_url || profile.avatar_url;

        await profile.save();

        res.json({ message: 'Profile updated successfully', profile });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
};

exports.deleteProfile = async (req, res) => {
    try {
        const { profileId } = req.params;
        await Profile.destroy({ where: { profile_id: profileId } });
        res.json({ message: 'Profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting profile', error });
    }
};